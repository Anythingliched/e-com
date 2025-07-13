import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#006666] to-[#1abc9c] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Privacy Policy</h1>
          <p className="text-xl text-center opacity-90">Your Privacy Matters to FlipaZon</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <p className="text-gray-600 text-lg mb-4">Last updated: January 13, 2025</p>
            <p className="text-gray-700 leading-relaxed">
              At FlipaZon, we respect your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
              you use our e-commerce platform.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-[#006666] mb-4 border-b-2 border-[#66cccc] pb-2">
                1. Information We Collect
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#339999] mb-3">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect personal information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Name, email address, and phone number</li>
                  <li>Shipping and billing addresses</li>
                  <li>Payment information (processed securely)</li>
                  <li>Account credentials and preferences</li>
                  <li>Communications with customer support</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#339999] mb-3">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you use FlipaZon, we automatically collect:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Device information (IP address, browser type, device type)</li>
                  <li>Usage data (pages visited, time spent, clicks)</li>
                  <li>Location information (with your consent)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#006666] mb-4 border-b-2 border-[#66cccc] pb-2">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Processing orders and managing your account</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Personalizing your shopping experience</li>
                <li>Sending transactional emails and notifications</li>
                <li>Improving our platform and services</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
                <li>Marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#006666] mb-4 border-b-2 border-[#66cccc] pb-2">
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#339999] mb-3">With Sellers</h3>
                <p className="text-gray-700 leading-relaxed">
                  We share necessary information with sellers to fulfill your orders, including your name, 
                  shipping address, and order details.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#339999] mb-3">Service Providers</h3>
                <p className="text-gray-700 leading-relaxed">
                  We work with third-party service providers for payment processing, shipping, analytics, 
                  and other business operations. These providers have access to your information only to 
                  perform services on our behalf.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#339999] mb-3">Legal Requirements</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may disclose your information if required by law, court order, or government regulation, 
                  or to protect our rights, property, or safety.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#006666] mb-4 border-b-2 border-[#66cccc] pb-2">
                4. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure payment processing with PCI DSS compliance</li>
                <li>Regular security audits and monitoring</li>
                <li>Access controls and employee training</li>
                <li>Data backup and recovery procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#006666] mb-4 border-b-2 border-[#66cccc] pb-2">
                5. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use our platform</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookie preferences through your browser settings or our cookie consent manager.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#006666] mb-4 border-b-2 border-[#66cccc] pb-2">
                6. Your Rights and Choices
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Consent Withdrawal:</strong> Withdraw consent for data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#006666] mb-4 border-b-2 border-[#66cccc] pb-2">
                7. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and 
                comply with legal obligations. Account information is retained until account deletion. 
                Transaction records are kept for 7 years for tax and accounting purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#006666] mb-4 border-b-2 border-[#66cccc] pb-2">
                8. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than India. 
                We ensure appropriate safeguards are in place to protect your information in accordance 
                with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#006666] mb-4 border-b-2 border-[#66cccc] pb-2">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                FlipaZon is not intended for children under 18. We do not knowingly collect personal 
                information from children. If you believe we have collected information from a child, 
                please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#006666] mb-4 border-b-2 border-[#66cccc] pb-2">
                10. Third-Party Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our platform may contain links to third-party websites. We are not responsible for 
                the privacy practices of these sites. We encourage you to review their privacy policies 
                before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#006666] mb-4 border-b-2 border-[#66cccc] pb-2">
                11. Updates to Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of material 
                changes via email or platform notification. Your continued use of FlipaZon after 
                such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#006666] mb-4 border-b-2 border-[#66cccc] pb-2">
                12. Contact Us
              </h2>
              <div className="bg-[#f0fffe] p-6 rounded-lg border-l-4 border-[#006666]">
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about this Privacy Policy or to exercise your privacy rights, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@flipazon.com</p>
                  <p><strong>Phone:</strong> +91 22 6789 1235</p>
                  <p><strong>Address:</strong> FlipaZon Privacy Officer<br />
                  123 Commerce Street, Bandra Kurla Complex<br />
                  Mumbai, Maharashtra 400051<br />
                  India</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#006666] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">© 2025 FlipaZon. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;