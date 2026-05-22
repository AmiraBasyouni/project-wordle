import React from "react";

import * as Dialog from "@radix-ui/react-dialog";

const TutorialDialog = () => (
  <Dialog.Root defaultOpen>
    <Dialog.Trigger asChild>
      <button className="DialogButton">Tutorial</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title>Tutorial</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Your goal is to guess a five letter word. <br />
          You have 6 attempts. <br />
          The visual keyboard is not interactive. <br />
          <br />
          Progress <br />
          <strong className="color-green">Green:</strong> correct letter{" "}
          <strong>
            <i>and</i>
          </strong>{" "}
          placement <br />
          <strong className="color-yellow">Yellow:</strong> correct letter but
          wrong placement <br />
          <strong className="color-gray">Gray:</strong> incorrect letter
        </Dialog.Description>
        <Dialog.Close asChild className="DialogButton DialogCloseButton">
          <button>X</button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default TutorialDialog;
