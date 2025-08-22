"use client";
import { useState } from "react";

interface PromptProps {
  isOpen: boolean;
}
const PromptBar = ({ isOpen }: PromptProps) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("message is ", message);

    setMessage("");
  };

  return (
    <>
      <div className="mx-auto w-full md:max-w-[60rem] px-4 mt-4">
        <div className="">
          <div className="flex flex-col items-center justify-center my-5">
            <h1 className="text-3xl my-2">Start Chat with your Friends</h1>
            <p className="text-sm ">
              Connect, chat, and share moments with friends!
            </p>
          </div>
          <div>
            <div className="relative z-10"> </div>
            <form className="rounded-md" onSubmit={(e) => onSubmit(e)}>
              <div className="relative w-full grow flex flex-col overflow-hidden shadow-lg border rounded-3xl blackbox-textarea-hover-color bg-background dark:bg-bgDarkSecondary">
                <div className="flex-grow min-h-0">
                  <div className=" left-0 top-4 md:left-4">
                    <div className="flex gap-1">
                      <input
                        className="hidden"
                        id="file-input-HikI31v"
                        accept="image/*, .txt, .py, .js, .ts, .tsx, .html, .css,  .md, .pdf, .heic, .heif, .csv, .xlsx.mp4, .mov, .avi, .wmv, .flv, .mkv, .webm"
                        type="file"
                      />
                      <div className="items-center justify-center text-sm font-medium shadow-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full bg-background p-0 cursor-pointer dark:bg-bgDarkMain dark:hover:bg-bgDarkSidebarHover dark:text-gray-300 hidden">
                        <label className="flex h-8 cursor-pointer items-center justify-center rounded-md transition-all">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-github size-4"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="ml-0 items-center gap-1 text-area-send-space px-6">
                    <div className="relative w-full md:w-[calc(100%-90px)] max-h-[300px] overflow-y-auto">
                      <textarea
                        tabIndex={0}
                        rows={1}
                        placeholder="Message here..."
                        spellCheck="false"
                        id="chat-input-box"
                        className="min-h-[60px] w-full resize-none bg-transparent pr-4 py-[1.3rem] focus-within:outline-none text-base sm:text-base break-words pb-1"
                        style={{ height: "49px !important" }}
                        value={message}
                        onChange={(e) => handleMessageChange(e)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="absolute right-2 gap-2 top-4 flex items-end">
                    <button
                      className="bg-primary text-primary-foreground inline-flex items-center justify-center text-sm font-medium shadow-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full p-0"
                      type="submit"
                      data-state="closed"
                      style={{ marginRight: "0.3em" }}
                    >
                      <span className="md:flex">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="relative mt-4">
          <div className="absolute w-full"></div>
        </div>
      </div>
    </>
  );
};
export default PromptBar;
