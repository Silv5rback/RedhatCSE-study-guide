import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';

export default function LabShell() {
  const terminalRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [wsUrl, setWsUrl] = useState('');

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Prompt user for the WebSocket URL
    const defaultUrl = `ws://${window.location.hostname}:7681`;
    const userUrl = prompt('Enter ttyd WebSocket URL (e.g., ws://your-ip:7681):', defaultUrl);
    if (!userUrl) return;
    setWsUrl(userUrl);

    import('@xterm/xterm').then(({ Terminal }) => {
      import('@xterm/xterm/css/xterm.css').then(() => {
        const container = terminalRef.current;
        if (!container) return;

        container.innerHTML = '';

        const term = new Terminal({
          cursorBlink: true,
          fontSize: 14,
          fontFamily: '"Cascadia Code", "Consolas", "Monaco", monospace',
          theme: { background: '#000000' },
        });

        term.open(container);

        let socket;
        try {
          socket = new WebSocket(userUrl);

          socket.onopen = () => {
            setIsConnected(true);
          };

          socket.onmessage = (event) => {
            term.write(event.data);
          };

          socket.onclose = () => {
            setIsConnected(false);
          };

          socket.onerror = () => {
            setIsConnected(false);
          };

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
          setIsConnected(false);
        }
      });
    });
  }, []);

  return (
    <Layout title="Live Shell Lab">
      <div className="container margin-vert--xl">
        <h1>Live Shell Lab</h1>
        <p>
          This page connects to a <strong>ttyd</strong> backend running on WSL2/Linux.
          Make sure ttyd is running (see <a href="/phase0-lab-setup/04-ttyd-backend">Phase 0, Module 4</a>).
        </p>

        <div style={{ border: '1px solid #333', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#000', height: '500px', width: '100%' }}>
          <div style={{ backgroundColor: '#2d2d2d', color: '#ccc', padding: '0.5rem 1rem', fontFamily: 'monospace', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
            <span>Lab Shell</span>
            <span style={{ color: isConnected ? '#4caf50' : '#f44336' }}>{isConnected ? '● connected' : '○ disconnected'}</span>
          </div>
          <div ref={terminalRef} style={{ height: 'calc(100% - 32px)', overflow: 'hidden' }} />
        </div>

        {!isConnected && (
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fff3cd', border: '1px solid #ffc107', borderRadius: '4px' }}>
            <p>Not connected. Make sure:</p>
            <ul>
              <li>ttyd is running on your WSL2 VM: <code>ttyd -p 7681 bash</code></li>
              <li>You entered the correct WebSocket URL</li>
              <li>Your firewall allows connections to port 7681</li>
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
}
