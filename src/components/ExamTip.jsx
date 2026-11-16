/**
 * ExamTip.jsx — Proctor-focused exam tips callout
 * 
 * Usage in MDX:
 * import ExamTip from '@site/src/components/ExamTip';
 * 
 * <ExamTip tip="The RHCSA proctor checks system state, not your command history. Verify with systemctl status, not just that the command ran without error." />
 */

import React from 'react';

export default function ExamTip({ tip, title = 'Exam Tip' }) {
  return (
    <div className="exam-tip">
      <div className="exam-tip-title">{title}</div>
      {tip}
    </div>
  );
}
