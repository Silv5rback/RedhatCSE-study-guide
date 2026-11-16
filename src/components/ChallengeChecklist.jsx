/**
 * ChallengeChecklist.jsx — Verification checklist for Challenge Trials
 * 
 * Usage in MDX:
 * import ChallengeChecklist from '@site/src/components/ChallengeChecklist';
 * 
 * <ChallengeChecklist items={[
 *   "The systemd service is enabled and active",
 *   "The firewall rule allows SSH on port 22",
 *   "SELinux is in enforcing mode",
 *   "/etc/fstab has a valid entry for the new LVM volume",
 * ]} />
 */

import React, { useState } from 'react';

export default function ChallengeChecklist({ items, title = 'Verification Checklist' }) {
  const [checked, setChecked] = useState(new Array(items.length).fill(false));

  const toggle = (index) => {
    const next = [...checked];
    next[index] = !next[index];
    setChecked(next);
  };

  const allChecked = checked.every(Boolean);
  const completedCount = checked.filter(Boolean).length;

  return (
    <div className="challenge-trial">
      <h4 className="challenge-trip-title">{title}</h4>
      <p>
        Complete each item without looking at the Guided Lab steps.
      </p>
      <ul className="verification-checklist">
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={checked[index]}
              onChange={() => toggle(index)}
              aria-label={item}
            />
            <span style={{ marginLeft: '0.5rem' }}>{item}</span>
          </li>
        ))}
      </ul>
      {allChecked && (
        <div style={{
          marginTop: '1rem',
          padding: '0.75rem',
          backgroundColor: 'var(--ifm-color-success-lightest)',
          border: '1px solid var(--ifm-color-success)',
          borderRadius: 'var(--ifm-global-radius)',
          color: 'var(--ifm-color-success-dark)',
        }}>
          ✓ All checks complete. You're ready for the exam!
        </div>
      )}
      <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--ifm-color-secondary-dark)' }}>
        {completedCount} / {items.length} complete
      </div>
    </div>
  );
}
