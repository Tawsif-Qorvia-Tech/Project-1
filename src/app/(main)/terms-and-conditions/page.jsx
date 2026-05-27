import React from 'react';

const sections = [
  {
    num: '1.',
    title: 'About Our Services',
    content: (
      <p>
        We are a trusted manufacturer of veterinary medicines, specializing in poultry healthcare.
        Our website provides information about our products, including vaccines, antibiotics, nutritional
        supplements, growth promoters, and other veterinary pharmaceutical solutions for livestock owners
        and veterinarians across the region.
      </p>
    ),
  },
  {
    num: '2.',
    title: 'Eligibility',
    content: (
      <p>
        By using this Site, you represent that you are at least 18 years of age, have the legal
        capacity to agree to these Terms, and your use will comply with all applicable laws and
        veterinary regulations in your jurisdiction.
      </p>
    ),
  },
  {
    num: '3.',
    title: 'Intellectual Property Rights',
    content: (
      <p>
        All content on this Site is the property of our company and is protected by copyright,
        trademark, and other intellectual property laws. You are granted a limited, non-exclusive
        license to access and view the Site for informational purposes only.
      </p>
    ),
  },
  {
    num: '4.',
    title: 'Contact Forms and Newsletter',
    content: (
      <p>
        By submitting information through our forms, you agree that all information is accurate, we
        may use it to respond to inquiries, and your information will be handled according to our
        Privacy Policy.
      </p>
    ),
  },
  {
    num: '5.',
    title: 'Product Information Disclaimer',
    content: (
      <p>
        We do not guarantee specific outcomes from the use of our veterinary products, as results
        depend on many factors including animal health, farm management, and environmental conditions.
        Always consult a licensed veterinarian before administering any veterinary medicine.
      </p>
    ),
  },
  {
    num: '6.',
    title: 'Third-Party Links',
    content: (
      <p>
        Our Site may contain links to third-party websites. We do not control or assume
        responsibility for their content, privacy policies, or practices. We encourage you to
        review the terms and privacy policies of any external sites you visit.
      </p>
    ),
  },
  {
    num: '7.',
    title: 'Limitation of Liability',
    content: (
      <p>
        To the fullest extent permitted by law, we shall not be liable for any indirect, incidental,
        special, or consequential damages arising from your use of this Site or our products,
        including but not limited to loss of data, revenue, or livestock productivity.
      </p>
    ),
  },
  {
    num: '8.',
    title: 'Governing Law',
    content: (
      <p>
        These Terms shall be governed by and construed in accordance with the laws of Bangladesh.
        Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of
        the courts located in Dhaka, Bangladesh.
      </p>
    ),
  },
  {
    num: '9.',
    title: 'Changes to These Terms',
    content: (
      <p>
        We reserve the right to update or modify these Terms at any time. Changes will be effective
        immediately upon posting to the Site. Your continued use of the Site after any changes
        constitutes your acceptance of the revised Terms.
      </p>
    ),
  },
  {
    num: '10.',
    title: 'Contact Us',
    content: (
      <>
        <p>If you have any questions about these Terms and Conditions, please contact us:</p>
        <p className="mt-3">
          <span className="font-semibold text-base-content">Email:</span> partners@poultryhealth.com<br />
          <span className="font-semibold text-base-content">Address:</span> Jharkhand, India<br />
          <span className="font-semibold text-base-content">Phone:</span> +91 12345 67890
        </p>
      </>
    ),
  },
];

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block h-px w-9 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Legal</span>
            <span className="block h-px w-9 bg-primary" />
          </div>
          <h1 className="text-5xl font-black tracking-tight mb-3 leading-tight">
            TERMS & <span className="text-primary">CONDITIONS</span>
          </h1>
          <p className="text-base-content/60 text-sm">
            <span className="font-semibold text-base-content">Effective Date:</span> MAY 27, 2026
            &nbsp;·&nbsp;
            <span className="font-semibold text-base-content">Last Updated:</span> MAY 27, 2026
          </p>
        </div>

        {/* Intro Card */}
        <div className="bg-base-100 rounded-2xl border border-base-300 p-6 mb-6">
          <p className="text-base-content/70 text-sm leading-relaxed">
            Welcome. These Terms and Conditions constitute a legally binding agreement between you
            and our company concerning your access to and use of this website. By accessing or using
            the Site, you agree to be bound by these Terms. If you do not agree, please do not use
            the Site.
          </p>

          {/* Sections nested inside the card like the reference */}
          <div className="mt-6 space-y-0 divide-y divide-base-200">
            {sections.map((section) => (
              <div key={section.num} className="pt-5 pb-5 first:pt-0 last:pb-0">
                <div className="flex items-center gap-2 border-l-4 border-primary pl-4 mb-2">
                  <span className="text-primary text-2xl font-bold">{section.num}</span>
                  <h2 className="text-3xl font-bold text-base-content">{section.title}</h2>
                </div>
                <div className="px-6 pb-5 text-md leading-relaxed space-y-2">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-6 border-t border-base-300 text-sm text-base-content/70 space-y-1">
          <p>These Terms are effective as of MAY 27, 2026.</p>
          <p>Trusted manufacturer of veterinary medicines, specializing in poultry healthcare.</p>
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;