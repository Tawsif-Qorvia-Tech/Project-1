export const b2bInquiryTemplate = ({
  contactName,
  farmName,
  email,
  phone,
  operationType,
  flockSize,
  urgency,
  requirement,
  message
}) => {
  // Map urgency slug or value to clean visual badges
  const isCritical = urgency?.toLowerCase().includes('critical') || false;
  const statusBg = isCritical ? '#fef2f2' : '#f5e6f5/40';
  const statusText = isCritical ? '#991b1b' : '#7c3aed';

  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4; padding:20px; font-family:Arial, sans-serif;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; padding:20px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <tr>
            <td align="center" style="padding-bottom:20px; border-bottom:1px solid #eeeeee;">
              <span style="font-size:11px; text-transform:uppercase; font-weight:bold; tracking-spacing:1px; color:#7c3aed; background:rgba(124,58,237,0.1); padding:4px 8px; border-radius:4px; display:inline-block; margin-bottom:10px;">
                B2B  PPartnerortal
              </span>
              <h2 style="margin:10px 0; color:#232323; font-size:22px; font-weight:900;">⚡ New Commercial Request</h2>
              <p style="color:#666666; margin:4px 0; font-size:14px;">Response Commitment: <strong>Within 1 Business Day</strong></p>
            </td>
          </tr>

          <!-- Customer / Farm Details -->
          <tr>
            <td style="padding:20px 0 10px 0;">
              <h3 style="color:#232323; margin-bottom:12px; font-size:14px; text-transform:uppercase; letter-spacing:0.5px;">Account Profile</h3>
              <p style="margin:6px 0; font-size:14px; color:#333;"><strong>Contact Person:</strong> ${contactName}</p>
              <p style="margin:6px 0; font-size:14px; color:#333;"><strong>Farm / Company:</strong> ${farmName}</p>
              <p style="margin:6px 0; font-size:14px; color:#333;"><strong>Business Email:</strong> <a href="mailto:${email}" style="color:#7c3aed; text-decoration:none;">${email}</a></p>
              <p style="margin:6px 0; font-size:14px; color:#333;"><strong>Contact Number:</strong> ${phone}</p>
            </td>
          </tr>

          <!-- Operational & Requirement Details Grid -->
          <tr>
            <td>
              <table width="100%" border="1" cellspacing="0" cellpadding="12" style="border-collapse:collapse; border:1px solid #dddddd; margin-bottom:20px;">
                <thead>
                  <tr style="background:#f9f9f9;">
                    <th align="left" style="font-size:13px; color:#666;">Operational Matrix</th>
                    <th align="right" style="font-size:13px; color:#666;">Verified Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="font-size:14px; color:#333;"><strong>Operation Type</strong></td>
                    <td align="right" style="font-size:14px; color:#232323;">${operationType}</td>
                  </tr>
                  <tr>
                    <td style="font-size:14px; color:#333;"><strong>Flock Size Capacity</strong></td>
                    <td align="right" style="font-size:14px; color:#232323;">${flockSize}</td>
                  </tr>
                  <tr>
                    <td style="font-size:14px; color:#333;"><strong>Primary Requirement</strong></td>
                    <td align="right" style="font-size:14px; color:#7c3aed; font-weight:600;">${requirement}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <!-- Inquiry Specifications Box -->
          ${message ? `
          <tr>
            <td style="padding-bottom:20px;">
              <h3 style="color:#232323; margin-bottom:8px; font-size:14px; text-transform:uppercase; letter-spacing:0.5px;">Inquiry Specifications</h3>
              <div style="background:#fdfdfd; border:1px dashed #cccccc; padding:15px; border-radius:6px; color:#555555; font-size:14px; line-height:1.5; font-style:italic;">
                "${message}"
              </div>
            </td>
          </tr>
          ` : ''}

          <!-- Triage Status Block -->
          <tr>
            <td align="center" style="padding:15px; background:${statusBg}; border:1px solid ${isCritical ? '#fecaca' : '#f3e8ff'}; border-radius:6px; margin-bottom:20px;">
              <h3 style="color:${statusText}; margin:0; font-size:15px;">
                ${isCritical ? '🚨 Critical Urgency Triage Alert' : '📋 Routine Processing Queue'}
              </h3>
              <p style="color:#555555; margin:5px 0 0 0; font-size:13px;">Status Classification: <strong>${urgency}</strong></p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding-top:20px; border-top:1px solid #eeeeee; color:#777777; font-size:12px; line-height:1.5;">
              <p style="margin:0 0 4px 0;">This request was logged via the <strong>Poultry Health Hub</strong> Partner Network.</p>
              <p style="margin:0 0 12px 0;">Distribution Hub: 123 Agriculture Way, TX 75001</p>
              <p style="font-size:11px; color:#999999; margin:0;">Internal routing only • Automated transmission protocol • Do not reply directly.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
  `;
};