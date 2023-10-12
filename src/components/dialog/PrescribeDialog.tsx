import React, { Fragment } from "react";
import FindingDisorder from "../post-data/FindingDisorder";

function PrescribeDialog({ closeModal, Dialog, Transition, isOpen }: any) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[40rem] transform overflow-hidden rounded-2xl bg-[#F7F8FC] dark:bg-[#11111D] p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6  dark:text-white text-black md:text-left text-center"
                >
                  Prescribe your patient
                </Dialog.Title>
                <div className="mt-2 md:text-left text-center">
                  <p className="text-sm text-gray-500">
                    Add Findings and Medicines to your record.
                  </p>
                </div>

                {/* <form> */}
                <FindingDisorder />
                <button
                  className={`border dark:hover:bg-[#070711] hover:bg-[#319780] bg-[#319795] dark:border-white dark:text-white text-white hover:text-white font-bold px-4 py-1 rounded-lg`}
                  onClick={closeModal}
                >
                  ADD
                </button>
                {/* </form> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default PrescribeDialog;
