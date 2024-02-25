import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const DisclaimerCard: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(!show);
  };

  return (
    <>
      <div
        className="relative mt-1.5 rounded-lg dark:border-gray-700 border border-gray-200 mb-4 ml-4 mr-4 w-[807px] bg-white dark:bg-gray-800"
        style={{ color: 'white' }}
      >
        <div className="flex justify-between items-center p-3 cursor-pointer" onClick={handleOpen}>
          <div className="flex items-center">
            <img className="p-2" src="info.svg" alt="" width="50" />
            <h2 className="text-white font-bold">Disclaimers</h2>
          </div>
          <div className="pl-3 pr-3">
            {show ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
          </div>
        </div>

        {show && (
          <div className="p-5 pl-10 pr-10 bg-gray-900 rounded-t-lg flex flex-col text-left">
            {' '}
            {/* Adjusted to text-left */}
            <div className="text-white mb-4">
              <h3 className="font-bold mb-2">Please be aware of the following before using our platform.</h3>
              <br />
              <ul className="list-disc pl-5">
                <li>
                  This web application generates Ethereum wallets client-side, ensuring your keys are never transmitted
                  over the internet.
                </li>
                <li>
                  Transactions on the blockchain are irreversible. Always double-check the addresses before sending or
                  receiving tokens.
                </li>
                <li>
                  We do not store your private keys or seed phrases. It is crucial to save and back up your wallet
                  information securely.
                </li>
                <li>
                  Be cautious of phishing attempts. Always ensure you are using our authentic website and not a
                  malicious clone.
                </li>
                <li>
                  Use a secure network when generating wallets and performing transactions to protect against potential
                  security threats.
                </li>
                <li>Code is open-source and transparent. Click on the Github logo to find the sources.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DisclaimerCard;
