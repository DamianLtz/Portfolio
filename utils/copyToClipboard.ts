export const copyToClipboard = () => {
  navigator.clipboard.writeText("damianlaterza@gmail.com");
  setTimeout(() => {
    console.log("copied!");
  }, 100);
};
