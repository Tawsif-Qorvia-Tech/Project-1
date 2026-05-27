import React from 'react';

const sections = [
  {
    num: '1.',
    title: 'Information We Collect',
    content: (
      <>
        <p>
          <span className="font-semibold text-base-content">Information You Provide:</span>{' '}
          Name, email address, phone number, company name, job title, and inquiry details when you fill out contact forms or subscribe to our newsletter.
        </p>
        <p>
          <span className="font-semibold text-base-content">Automatically Collected:</span>{' '}
          IP address, browser type, device type, pages visited, referring website, and general geographic location through cookies and similar technologies.
        </p>
        <p>
          <span className="font-semibold text-base-content">Business Information:</span>{' '}
          Farm size, livestock type, and veterinary needs when you request product consultations or quotations.
        </p>
      </>
    ),
  },
  {
    num: '2.',
    title: 'How We Use Your Information',
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Respond to your inquiries about our veterinary medicines and poultry healthcare products</li>
          <li>Process product orders, quotation requests, and consultations</li>
          <li>Send newsletters, product updates, and promotional communications (with your consent)</li>
          <li>Improve our website experience and service offerings</li>
          <li>Comply with legal and regulatory obligations applicable to veterinary medicine manufacturers</li>
        </ul>
      </>
    ),
  },
  {
    num: '3.',
    title: 'Sharing Your Information',
    content: (
      <>
        <p>We do not sell or rent your personal information to third parties. We may share your data only in the following circumstances:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <span className="font-semibold text-base-content">Service Providers:</span>{' '}
            Trusted third parties who assist in website operations, analytics, or communications — bound by confidentiality agreements
          </li>
          <li>
            <span className="font-semibold text-base-content">Legal Requirements:</span>{' '}
            When required by law, regulation, or government authority
          </li>
          <li>
            <span className="font-semibold text-base-content">Business Transfers:</span>{' '}
            In connection with a merger, acquisition, or sale of assets, with prior notice provided
          </li>
        </ul>
      </>
    ),
  },
  {
    num: '4.',
    title: 'Cookies & Tracking Technologies',
    content: (
      <p>
        Our website uses cookies to enhance your browsing experience, analyze site traffic, and understand user preferences.
        You may control cookie settings through your browser. Disabling cookies may affect certain features of our website.
      </p>
    ),
  },
  {
    num: '5.',
    title: 'Data Retention',
    content: (
      <p>
        We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy,
        comply with our legal obligations, resolve disputes, and enforce our agreements. When data is no longer required,
        it is securely deleted or anonymized.
      </p>
    ),
  },
  {
    num: '6.',
    title: 'Your Rights',
    content: (
      <>
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate or incomplete data</li>
          <li>Request deletion of your personal information</li>
          <li>Withdraw consent for marketing communications at any time</li>
          <li>Lodge a complaint with the relevant data protection authority</li>
        </ul>
        <p className="mt-3">To exercise any of these rights, please contact us using the details below.</p>
      </>
    ),
  },
  {
    num: '7.',
    title: 'Data Security',
    content: (
      <p>
        We implement appropriate technical and organizational measures to protect your personal information against
        unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the
        internet is completely secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    num: '8.',
    title: 'Third-Party Links',
    content: (
      <p>
        Our website may contain links to third-party websites. We are not responsible for the privacy practices or
        content of those sites. We encourage you to review the privacy policy of any external site you visit.
      </p>
    ),
  },
  {
    num: '9.',
    title: 'Changes to This Policy',
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
        When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to review this
        policy periodically.
      </p>
    ),
  },
  {
    num: '10.',
    title: 'Contact Us',
    content: (
      <>
        <p>If you have any questions or concerns about this Privacy Policy or how we handle your data, please reach out to us:</p>
        <p className="mt-3">
          <span className="font-semibold text-base-content">Email:</span> partners@poultryhealth.com<br />
          <span className="font-semibold text-base-content">Address:</span> Jharkhand, India<br />
          <span className="font-semibold text-base-content">Phone:</span> +91 12345 67890   
        </p>
      </>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-9 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Your Data</span>
            <span className="block h-px w-9 bg-primary" />
          </div>
          <h1 className="text-5xl font-black tracking-tight mb-3">
            PRIVACY <span className="text-primary">POLICY</span>
          </h1>
          <p className="text-base-content/60 text-sm">
            <span className="font-semibold text-base-content">Effective Date:</span> MAY 27, 2026
            &nbsp;·&nbsp;
            <span className="font-semibold text-base-content">Last Updated:</span> MAY 27, 2026
          </p>
        </div>

        {/* Trust Banner */}
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 flex gap-4 items-start mb-10">
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <p className="text-base-content/70 text-sm leading-relaxed">
            When you visit our website or use our services, you trust us with your information.
            We take this responsibility seriously and are committed to protecting your privacy.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.num}
              className="bg-base-100 rounded-2xl border border-base-300 overflow-hidden"
            >
              <div className="flex items-center gap-3 px-6 py-4 border-l-4 border-primary">
                <span className="text-primary text-2xl font-bold">{section.num}</span>
                <h2 className="text-3xl font-bold text-base-content">{section.title}</h2>
              </div>
              <div className="px-6 pb-5 text-md leading-relaxed space-y-2">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-6 border-t border-base-300 text-sm text-base-content/70 space-y-1">
          <p>This policy is effective as of MAY 27, 2026.</p>
          <p>Trusted manufacturer of veterinary medicines, specializing in poultry healthcare.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;