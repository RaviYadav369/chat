const PromptBar = () => {
  return (
    <>
      <div className="mx-auto w-full md:max-w-[60rem] px-4 mt-4">
        <div className="">
          <div>
            <div className="relative z-10"> </div>
            <form className="rounded-md" id="prompt-form">
              <div id="slash-command"></div>
              <div className="flex justify-between">
                <div className="flex mr-[1.5rem]"></div>
              </div>
              <div className="absolute flex gap-2 bottom-[calc(100%+1rem)] hidden">
                <img className="h-10" />
                <div className="text-sm flex items-center gap-2">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"></path>
                    </svg>
                  </button>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span></span>
                </div>
              </div>
              <div className="relative w-full grow flex flex-col overflow-hidden shadow-lg border rounded-3xl blackbox-textarea-hover-color bg-background dark:bg-bgDarkSecondary">
                <div className="flex-grow min-h-0">
                  <div className="absolute left-0 top-4 md:left-4">
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                      ></textarea>
                    </div>
                  </div>
                  <div className="absolute right-2 gap-2 top-4 flex items-end">
                    <button
                      className="bg-primary text-primary-foreground inline-flex items-center justify-center text-sm font-medium shadow-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full p-0"
                      id="prompt-form-send-button"
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
                            fill-rule="evenodd"
                            clip-rule="evenodd"
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
