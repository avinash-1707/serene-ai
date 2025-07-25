"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function NewChatModal({
  isOpen,
  onClose,
  onCreate,
}: {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (title: string) => void;
}) {
  const [title, setTitle] = useState("");

  const handleCreate = () => {
    if (title.trim()) {
      onCreate(title.trim());
      setTitle("");
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-100/40 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            className="bg-white/90 rounded-2xl p-6 mx-3 w-full max-w-md shadow-xl border border-indigo-100"
          >
            <h2 className="text-lg font-semibold mb-4 text-indigo-900">
              Name your chat
            </h2>
            <input
              type="text"
              placeholder="Enter chat title"
              className="w-full p-2 border border-indigo-100 rounded mb-4 text-indigo-900 bg-indigo-100/40 placeholder:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              value={title}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleCreate();
                }
              }}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCreate}
                className="text-sm px-4 py-2 rounded bg-gradient-to-br from-indigo-200 via-indigo-100 to-white text-indigo-900 border border-indigo-200 hover:from-indigo-300 hover:via-indigo-200 hover:to-white"
              >
                Create
              </button>
              <button
                onClick={onClose}
                className="text-sm px-4 py-2 text-indigo-900 rounded bg-white border border-indigo-100 hover:bg-indigo-100"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
