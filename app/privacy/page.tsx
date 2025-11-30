import React from "react";

const PrivacyPage = () => {
  return (
    <>
      <section
        className="w-full flex flex-col items-start justify-center p-5 scroll-mt-28"
        id="hero"
      >
        <div className="w-full flex flex-col justify-center items-center mt-10">
          <h1 className="text-4xl font-extrabold">
            Privacy Policy for Focusify
          </h1>
          <p className="mt-5">
            <strong>Effective Date:</strong> December 1st 2025
          </p>
        </div>
        <div>
          <p className="mt-5">
            Welcome to <strong>Focusify – Pomodoro & Focus Timer</strong>. Your
            privacy is important to us. This Privacy Policy explains how
            Focusify handles your information.
          </p>
          <p className="mt-5">
            By using Focusify, you agree to the terms outlined in this Privacy
            Policy.
          </p>
        </div>
        <div className="mt-10">
          <div className="px-10">
            <h2 className="text-3xl font-semibold">
              1. Information We Collect
            </h2>
            <p className="mt-2">
              Focusify does NOT collect, store, or share any personal
              information such as:
            </p>
            <ul className="list-inside list-disc mt-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Location</li>
              <li>Contacts</li>
              <li>Photos</li>
              <li>Device identifiers</li>
              <li>Device information</li>
            </ul>
            <p className="mt-2">
              All productivity data (focus sessions, break time, cycles, and
              stats) is stored locally on your device only
            </p>
          </div>
          <div className="mt-10 px-10">
            <h2 className="text-3xl font-semibold">2. How Your Data Is Used</h2>
            <p className="mt-2">
              Your data is used only to provide app functionality, including:
            </p>
            <ul className="list-inside list-disc mt-2">
              <li>Tracking focus cycles</li>
              <li>Update cycle time through settings</li>
              <li>Managing break timers</li>
              <li>Displaying productivity statistics</li>
            </ul>
            <p className="mt-2">This data never leaves your device.</p>
          </div>
          <div className="mt-10 px-10">
            <h2 className="text-3xl font-semibold">3. Data Sharing</h2>
            <p className="mt-2">Focusify does NOT share user data with:</p>
            <ul className="list-inside list-disc mt-2">
              <li>Advertisers</li>
              <li>Analytics platforms</li>
              <li>Third-party services</li>
              <li>Cloud servers</li>
            </ul>
          </div>
          <div className="mt-10 px-10">
            <h2 className="text-3xl font-semibold">4. Ads & Tracking</h2>
            <ul className="list-inside list-disc mt-2">
              <li>
                Focusify <strong>does NOT contain ads</strong>
              </li>
              <li>
                Focusify <strong>does NOT use tracking tools</strong>
              </li>
              <li>
                Focusify <strong>does NOT use cookies</strong>
              </li>
            </ul>
          </div>
          <div className="mt-10 px-10">
            <h2 className="text-3xl font-semibold">5. Notifications</h2>
            <p className="mt-2">
              Focusify may send <strong>local notifications</strong> to remind
              you about:
            </p>
            <ul className="list-inside list-disc mt-2">
              <li>Settings update status</li>
              <li>Any functionality blockers or errors</li>
            </ul>
            <p className="mt-2">
              These notifications are generated{" "}
              <strong>entirely on your device.</strong>
            </p>
          </div>
          <div className="mt-10 px-10">
            <h2 className="text-3xl font-semibold">6. Data Security</h2>
            <p className="mt-2">Since all data is stored locally:</p>
            <ul className="list-inside list-disc mt-2">
              <li>No external access is possible</li>
              <li>No cloud storage is used</li>
              <li>No remote servers are involved</li>
            </ul>
            <p className="mt-2">
              Only the user of the device can access the data.
            </p>
          </div>
          <div className="mt-10 px-10">
            <h2 className="text-3xl font-semibold">7. Children’s Privacy</h2>
            <p className="mt-2">
              Focusify is{" "}
              <strong>
                not designed specifically for children under the age of 13
              </strong>
              , and we do not knowingly collect any data from children.
            </p>
          </div>
          <div className="mt-10 px-10">
            <h2 className="text-3xl font-semibold">
              8. Changes to This Privacy Policy
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Any updates
              will be reflected on this page with a new{" "}
              <strong>Effective Date.</strong>
            </p>
          </div>
          <div className="mt-10 px-10">
            <h2 className="text-3xl font-semibold">
                9. Contact Information
            </h2>
            <p className="mt-2">If you have any questions about this Privacy Policy or Focusify, you may contact us at:</p>
            <p className="mt-2">📧 Email: devbysasanga@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
