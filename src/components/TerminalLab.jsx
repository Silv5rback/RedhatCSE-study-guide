/**
 * TerminalLab.jsx — Live shell lab component using xterm.js + ttyd backend
 * 
 * Connects to a ttyd WebSocket server running on WSL2/Linux VM.
 * Falls back to a static notice if the backend is unreachable.
 * 
 * Usage in MDX:
 * import TerminalLab from '@site/src/components/TerminalLab';
 * 
 * <TerminalLab
 *   wsUrl="ws://localhost:7681"
 *   label="Module 1 Lab Shell"
 *   height="400px"
 * />
 */

import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';

export default function TerminalLab({ wsUrl = 'ws://localhost:7681', label = 'Lab Shell', height = '400px' }) {
  const terminalRef = useRef(null);
  const fitAddonRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState(null);

  useEffect(() => {
    const container = terminalRef.current;
    if (!container) return;

    // Clear container
    container.innerHTML = '';

    const term = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      fontFamily: '"Cascadia Code", "Consolas", "Monaco", monospace',
      theme: {
        background: '#000000',
      },
    });

    // Load fit addon dynamically
    import('@xterm/addon-fit').then((fit) => {
      fitAddonRef.current = new fit.FitAddon();
      term.loadAddon(fitAddonRef.current);
      term.open(container);
      fitAddonRef.current.fit();
    });

    // Connect to ttyd WebSocket
    let socket;
    try {
      socket = new WebSocket(wsUrl);

      socket.onopen = () => {
        setIsConnected(true);
        setConnectionError(null);
      };

      socket.onmessage = (event) => {
        term.write(event.data);
      };

      socket.onclose = () => {
        setIsConnected(false);
        setConnectionError('Disconnected from lab shell. Start ttyd backend and refresh.');
      };

      socket.onerror = () => {
        setIsConnected(false);
        setConnectionError('Cannot connect to lab shell. Is ttyd running on WSL2?');
      };

      // Forward terminal input to WebSocket
      term.onData((data) => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(data);
        }
      });

      return () => {
        socket.close();
        term.dispose();
      };
    } catch (err) {
      setConnectionError(err.message);
    }
  }, [wsUrl]);

  return (
    <div className="terminal-lab-container" style={{ height }}>
      <div className="terminal-lab-header">
        <span>{label}</span>
        <span className={`terminal-lab-status ${isConnected ? 'connected' : 'disconnected'}`}>
          {isConnected ? '● connected' : '○ disconnected'}
        </span>
      </div>
      <div ref={terminalRef} style={{ height: 'calc(100% - 32px)', overflow: 'hidden' }} />
      {connectionError && (
        <div style={{
          padding: '1rem',
          backgroundColor: '#2d2d2d',
          color: '#f44336',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
        }}>
          ⚠ {connectionError}
        </div>
      )}
      {!isConnected && !connectionError && (
        <div style={{
          padding: '1rem',
          backgroundColor: '#2d2d2d',
          color: '#888',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
        }}>
          Connecting to lab shell at {wsUrl}...
        </div>
      )}
    </div>
  );
}
