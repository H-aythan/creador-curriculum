import React, { useState } from "react";
import "./initialisationWrapper.scss";
import { motion, AnimatePresence } from "framer-motion";
import InstallationSuccess from "../installationSuccess/installationSuccess";
import InitialisationSetup from "../initialisationSetup/initialisationSetup";

function InitialisationWrapper(props) {
  const [step, setstep] = useState(0);

  const nextStep = () => setstep(step + 1);

  return (
    <div id="authWrapper" className="authWrapper">
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="authModal"
      >
        <AnimatePresence>
          {step == 0 && (
            <motion.div
              style={{ position: "absolute", height: "100%", width: "100%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              exit={{ opacity: 0 }}
            >
              <InstallationSuccess nextStep={nextStep} />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {step == 1 && (
            <motion.div
              style={{ position: "absolute", height: "100%", width: "70%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              exit={{ opacity: 0 }}
            >
              <InitialisationSetup
                closeInitialisation={props.closeInitialisation}
                nextStep={nextStep}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default InitialisationWrapper;
