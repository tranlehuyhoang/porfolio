import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
function App() {
  const [count, setCount] = useState(0)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const copyToClipboard = (text) => {
    // Thực hiện hành động copy vào clipboard ở đây
    // Ví dụ:
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success('Success!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.error('Copy thất bại:', error);
      });
  }
  return (
    <>
      {/*$*/}
      <div className="mx-auto space-y-4 px-4 md:max-w-2xl md:px-0">
        <header className="-mx-2 mt-2 md:mx-0">
          <div className="aspect-h-1 aspect-w-2 relative flex w-full overflow-hidden rounded-xl bg-primary-900 shadow-lg">
            <img
              alt="Nguyễn Chánh Đại's cover image"
              fetchpriority="high"
              decoding="async"
              data-nimg="fill"
              className="object-cover"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
              sizes="(min-width: 768px) 672px, calc(100vw - 16px)"
              src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/293177554_1089189635308964_5573403880901357974_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=783fdb&_nc_ohc=9v8IMfdFe_kAX-X7zue&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBimOsIRlZlREyR3LCGzDcYT0xvqZ9ECs4CyGK8G3tI8A&oe=65D29F13"
            />
          </div>
          <div className="relative z-20 mx-auto -mt-10 h-40 w-40 select-none overflow-hidden rounded-full border-4 border-slate-900 bg-primary-900 md:-mt-20">
            <img
              alt="Nguyễn Chánh Đại's avatar"
              fetchpriority="high"
              width={152}
              height={152}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.6435-9/34984539_123433795217891_3850175453419536384_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_ohc=Ul0Am-o4Fh0AX-Qil9M&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfAlRpwXp0-jtcm5DWUd_oiZEDfXi5g4dF_ipymaQFnHSw&oe=65F4F874"
            />
          </div>
        </header>
        <main className="space-y-4">
          <div className="px-4 pb-4">
            <h1 className="mb-2 flex items-center justify-center text-2xl font-semibold">
              Giang Trần
              <i className="ml-2" aria-label="Verified">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500"
                >
                  <path
                    d="M21.56 10.74L20.2 9.16C19.94 8.86 19.73 8.3 19.73 7.9V6.2C19.73 5.14 18.86 4.27 17.8 4.27H16.1C15.71 4.27 15.14 4.06 14.84 3.8L13.26 2.44C12.57 1.85 11.44 1.85 10.74 2.44L9.17 3.81C8.87 4.06 8.3 4.27 7.91 4.27H6.18C5.12 4.27 4.25 5.14 4.25 6.2V7.91C4.25 8.3 4.04 8.86 3.79 9.16L2.44 10.75C1.86 11.44 1.86 12.56 2.44 13.25L3.79 14.84C4.04 15.14 4.25 15.7 4.25 16.09V17.8C4.25 18.86 5.12 19.73 6.18 19.73H7.91C8.3 19.73 8.87 19.94 9.17 20.2L10.75 21.56C11.44 22.15 12.57 22.15 13.27 21.56L14.85 20.2C15.15 19.94 15.71 19.73 16.11 19.73H17.81C18.87 19.73 19.74 18.86 19.74 17.8V16.1C19.74 15.71 19.95 15.14 20.21 14.84L21.57 13.26C22.15 12.57 22.15 11.43 21.56 10.74Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.33 14.94L16.16 10.11C16.45 9.82002 16.45 9.34002 16.16 9.05002C15.87 8.76002 15.39 8.76002 15.1 9.05002L10.8 13.35L8.91 11.46C8.62 11.17 8.14 11.17 7.85 11.46C7.56 11.75 7.56 12.23 7.85 12.52L10.27 14.94C10.41 15.08 10.6 15.16 10.8 15.16C11 15.16 11.19 15.08 11.33 14.94Z"
                    fill="white"
                  />
                </svg>
              </i>
            </h1>
            <h2 className="text-balance text-center text-slate-400">
              I am a guy passionate about software creativity.
            </h2>
          </div>
          <section className="space-y-4 rounded-xl border border-slate-700 bg-slate-800 p-4">
            <div className="flex items-center space-x-4" >
              <i className="text-slate-400">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.09 6.97999C20.24 6.03999 18.82 5.56999 16.76 5.56999H16.52V5.52999C16.52 3.84999 16.52 1.76999 12.76 1.76999H11.24C7.47998 1.76999 7.47998 3.85999 7.47998 5.52999V5.57999H7.23998C5.16998 5.57999 3.75998 6.04999 2.90998 6.98999C1.91998 8.08999 1.94998 9.56999 2.04998 10.58L2.05998 10.65L2.15998 11.7C2.16998 11.71 2.18998 11.73 2.20998 11.74C2.53998 11.96 2.87998 12.18 3.23998 12.38C3.37998 12.47 3.52998 12.55 3.67998 12.63C5.38998 13.57 7.26998 14.2 9.17998 14.51C9.26998 15.45 9.67998 16.55 11.87 16.55C14.06 16.55 14.49 15.46 14.56 14.49C16.6 14.16 18.57 13.45 20.35 12.41C20.41 12.38 20.45 12.35 20.5 12.32C20.96 12.06 21.39 11.78 21.81 11.47C21.83 11.46 21.85 11.44 21.86 11.42L21.9 11.06L21.95 10.59C21.96 10.53 21.96 10.48 21.97 10.41C22.05 9.39999 22.03 8.01999 21.09 6.97999ZM13.09 13.83C13.09 14.89 13.09 15.05 11.86 15.05C10.63 15.05 10.63 14.86 10.63 13.84V12.58H13.09V13.83ZM8.90998 5.56999V5.52999C8.90998 3.82999 8.90998 3.19999 11.24 3.19999H12.76C15.09 3.19999 15.09 3.83999 15.09 5.52999V5.57999H8.90998V5.56999Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.4"
                    d="M20.5 12.3C20.45 12.33 20.4 12.36 20.35 12.39C18.57 13.43 16.6 14.13 14.56 14.47C14.48 15.43 14.06 16.53 11.87 16.53C9.67997 16.53 9.25997 15.44 9.17997 14.49C7.26997 14.19 5.38997 13.56 3.67997 12.61C3.52997 12.53 3.37997 12.45 3.23997 12.36C2.87997 12.16 2.53997 11.94 2.20997 11.72C2.18997 11.71 2.16997 11.69 2.15997 11.68L2.76997 18.19C2.97997 20.18 3.79997 22.23 8.19997 22.23H15.82C20.22 22.23 21.04 20.18 21.25 18.18L21.88 11.4C21.87 11.42 21.85 11.44 21.83 11.45C21.4 11.76 20.96 12.05 20.5 12.3Z"
                    fill="currentColor"
                  />
                </svg>
              </i>
              <div className="text-balance">
                Senior Frontend Developer / UI Design Lead{/* */} at{/* */}{" "}
                <a
                  href="https://simplamo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                  aria-label="Simplamo"
                >
                  Simplamo
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <i className="text-slate-400">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.09 6.97999C20.24 6.03999 18.82 5.56999 16.76 5.56999H16.52V5.52999C16.52 3.84999 16.52 1.76999 12.76 1.76999H11.24C7.47998 1.76999 7.47998 3.85999 7.47998 5.52999V5.57999H7.23998C5.16998 5.57999 3.75998 6.04999 2.90998 6.98999C1.91998 8.08999 1.94998 9.56999 2.04998 10.58L2.05998 10.65L2.15998 11.7C2.16998 11.71 2.18998 11.73 2.20998 11.74C2.53998 11.96 2.87998 12.18 3.23998 12.38C3.37998 12.47 3.52998 12.55 3.67998 12.63C5.38998 13.57 7.26998 14.2 9.17998 14.51C9.26998 15.45 9.67998 16.55 11.87 16.55C14.06 16.55 14.49 15.46 14.56 14.49C16.6 14.16 18.57 13.45 20.35 12.41C20.41 12.38 20.45 12.35 20.5 12.32C20.96 12.06 21.39 11.78 21.81 11.47C21.83 11.46 21.85 11.44 21.86 11.42L21.9 11.06L21.95 10.59C21.96 10.53 21.96 10.48 21.97 10.41C22.05 9.39999 22.03 8.01999 21.09 6.97999ZM13.09 13.83C13.09 14.89 13.09 15.05 11.86 15.05C10.63 15.05 10.63 14.86 10.63 13.84V12.58H13.09V13.83ZM8.90998 5.56999V5.52999C8.90998 3.82999 8.90998 3.19999 11.24 3.19999H12.76C15.09 3.19999 15.09 3.83999 15.09 5.52999V5.57999H8.90998V5.56999Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.4"
                    d="M20.5 12.3C20.45 12.33 20.4 12.36 20.35 12.39C18.57 13.43 16.6 14.13 14.56 14.47C14.48 15.43 14.06 16.53 11.87 16.53C9.67997 16.53 9.25997 15.44 9.17997 14.49C7.26997 14.19 5.38997 13.56 3.67997 12.61C3.52997 12.53 3.37997 12.45 3.23997 12.36C2.87997 12.16 2.53997 11.94 2.20997 11.72C2.18997 11.71 2.16997 11.69 2.15997 11.68L2.76997 18.19C2.97997 20.18 3.79997 22.23 8.19997 22.23H15.82C20.22 22.23 21.04 20.18 21.25 18.18L21.88 11.4C21.87 11.42 21.85 11.44 21.83 11.45C21.4 11.76 20.96 12.05 20.5 12.3Z"
                    fill="currentColor"
                  />
                </svg>
              </i>
              <div className="text-balance">
                Founder / Developer{/* */} at{/* */}{" "}
                <a
                  href="https://zadark.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                  aria-label="ZaDark"
                >
                  ZaDark
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <i className="text-slate-400">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.09 6.97999C20.24 6.03999 18.82 5.56999 16.76 5.56999H16.52V5.52999C16.52 3.84999 16.52 1.76999 12.76 1.76999H11.24C7.47998 1.76999 7.47998 3.85999 7.47998 5.52999V5.57999H7.23998C5.16998 5.57999 3.75998 6.04999 2.90998 6.98999C1.91998 8.08999 1.94998 9.56999 2.04998 10.58L2.05998 10.65L2.15998 11.7C2.16998 11.71 2.18998 11.73 2.20998 11.74C2.53998 11.96 2.87998 12.18 3.23998 12.38C3.37998 12.47 3.52998 12.55 3.67998 12.63C5.38998 13.57 7.26998 14.2 9.17998 14.51C9.26998 15.45 9.67998 16.55 11.87 16.55C14.06 16.55 14.49 15.46 14.56 14.49C16.6 14.16 18.57 13.45 20.35 12.41C20.41 12.38 20.45 12.35 20.5 12.32C20.96 12.06 21.39 11.78 21.81 11.47C21.83 11.46 21.85 11.44 21.86 11.42L21.9 11.06L21.95 10.59C21.96 10.53 21.96 10.48 21.97 10.41C22.05 9.39999 22.03 8.01999 21.09 6.97999ZM13.09 13.83C13.09 14.89 13.09 15.05 11.86 15.05C10.63 15.05 10.63 14.86 10.63 13.84V12.58H13.09V13.83ZM8.90998 5.56999V5.52999C8.90998 3.82999 8.90998 3.19999 11.24 3.19999H12.76C15.09 3.19999 15.09 3.83999 15.09 5.52999V5.57999H8.90998V5.56999Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.4"
                    d="M20.5 12.3C20.45 12.33 20.4 12.36 20.35 12.39C18.57 13.43 16.6 14.13 14.56 14.47C14.48 15.43 14.06 16.53 11.87 16.53C9.67997 16.53 9.25997 15.44 9.17997 14.49C7.26997 14.19 5.38997 13.56 3.67997 12.61C3.52997 12.53 3.37997 12.45 3.23997 12.36C2.87997 12.16 2.53997 11.94 2.20997 11.72C2.18997 11.71 2.16997 11.69 2.15997 11.68L2.76997 18.19C2.97997 20.18 3.79997 22.23 8.19997 22.23H15.82C20.22 22.23 21.04 20.18 21.25 18.18L21.88 11.4C21.87 11.42 21.85 11.44 21.83 11.45C21.4 11.76 20.96 12.05 20.5 12.3Z"
                    fill="currentColor"
                  />
                </svg>
              </i>
              <div className="text-balance">
                Founder{/* */} at{/* */}{" "}
                <a
                  href="https://quaric.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                  aria-label="Quaric"
                >
                  Quaric
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <i className="text-slate-400">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M20.62 8.45C19.57 3.83 15.54 1.75 12 1.75C12 1.75 12 1.75 11.99 1.75C8.45997 1.75 4.41997 3.82 3.36997 8.44C2.19997 13.6 5.35997 17.97 8.21997 20.72C9.27997 21.74 10.64 22.25 12 22.25C13.36 22.25 14.72 21.74 15.77 20.72C18.63 17.97 21.79 13.61 20.62 8.45Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 13.46C13.7397 13.46 15.15 12.0497 15.15 10.31C15.15 8.57031 13.7397 7.16 12 7.16C10.2603 7.16 8.84998 8.57031 8.84998 10.31C8.84998 12.0497 10.2603 13.46 12 13.46Z"
                    fill="currentColor"
                  />
                </svg>
              </i>
              <div className="text-balance">
                <a
                  href="http://maps.google.com?q=Binh%20Thanh%20District,%20Ho%20Chi%20Minh%20City,%20Viet%20Nam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Binh Thanh District, Ho Chi Minh City, Viet Nam
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <i className="text-slate-400">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M22.6667 27.3333H9.33335C5.33335 27.3333 2.66669 25.3333 2.66669 20.6667V11.3333C2.66669 6.66666 5.33335 4.66666 9.33335 4.66666H22.6667C26.6667 4.66666 29.3334 6.66666 29.3334 11.3333V20.6667C29.3334 25.3333 26.6667 27.3333 22.6667 27.3333Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16 17.16C14.88 17.16 13.7467 16.8133 12.88 16.1067L8.70665 12.7733C8.27999 12.4267 8.19999 11.8 8.54666 11.3733C8.89333 10.9467 9.52 10.8667 9.94666 11.2133L14.12 14.5467C15.1333 15.36 16.8533 15.36 17.8666 14.5467L22.04 11.2133C22.4667 10.8667 23.1067 10.9333 23.44 11.3733C23.7867 11.8 23.72 12.44 23.28 12.7733L19.1067 16.1067C18.2533 16.8133 17.12 17.16 16 17.16Z"
                    fill="currentColor"
                  />
                </svg>
              </i>
              <div className="text-balance">
                <a
                  href="mailto:hello@chanhdai.com?subject=Hi,+Nguyễn Chánh Đại"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  hello@chanhdai.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <i className="text-slate-400">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.93974 15.2599C7.84974 15.2599 7.76973 15.2499 7.67973 15.2099C6.86973 14.9099 6.18973 14.3199 5.75973 13.5499C4.75973 11.7499 5.37974 9.39992 7.12974 8.30992L9.46974 6.85991C10.3297 6.32991 11.3397 6.16994 12.2997 6.41994C13.2597 6.66994 14.0697 7.29992 14.5597 8.17992C15.5597 9.97992 14.9397 12.3299 13.1897 13.4199L12.9297 13.6099C12.5897 13.8499 12.1197 13.7699 11.8797 13.4399C11.6397 13.0999 11.7197 12.6299 12.0497 12.3899L12.3597 12.1699C13.4797 11.4699 13.8597 10.0199 13.2497 8.90993C12.9597 8.38993 12.4897 8.01992 11.9297 7.86992C11.3697 7.71992 10.7797 7.80993 10.2697 8.12993L7.92973 9.57991C6.84973 10.2499 6.46974 11.6999 7.07974 12.8199C7.32974 13.2699 7.72974 13.6199 8.20974 13.7999C8.59974 13.9399 8.79973 14.3699 8.64973 14.7599C8.53973 15.0699 8.24974 15.2599 7.93974 15.2599Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12.66 17.6501C12.36 17.6501 12.05 17.6101 11.75 17.5301C10.79 17.2801 9.97997 16.6501 9.49997 15.7701C8.49997 13.9701 9.11996 11.6201 10.87 10.5301L11.13 10.3401C11.47 10.1001 11.94 10.1801 12.18 10.5101C12.42 10.8501 12.34 11.3201 12.01 11.5601L11.7 11.7801C10.58 12.4801 10.2 13.9301 10.81 15.0401C11.1 15.5601 11.57 15.9301 12.13 16.0801C12.69 16.2301 13.28 16.1401 13.79 15.8201L16.13 14.3701C17.21 13.7001 17.59 12.2501 16.98 11.1301C16.73 10.6801 16.33 10.3301 15.85 10.1501C15.46 10.0101 15.26 9.58011 15.41 9.19011C15.55 8.80011 15.99 8.60011 16.37 8.75011C17.18 9.05011 17.86 9.64012 18.29 10.4101C19.29 12.2101 18.67 14.5601 16.92 15.6501L14.58 17.1001C13.99 17.4601 13.33 17.6501 12.66 17.6501Z"
                    fill="currentColor"
                  />
                </svg>
              </i>
              <div className="text-balance">
                <a
                  href="https://chanhdai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  chanhdai.com
                </a>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <div
              role="link"
              tabIndex={0}
              className="flex cursor-pointer items-center space-x-4 rounded-xl p-4 border border-slate-700 bg-slate-800 transition-all hover:border-blue-500 select-none"
            >
              <img
                alt="LinkedIn"
                loading="lazy"
                width={48}
                height={48}
                decoding="async"
                data-nimg={1}
                className="rounded-xl shadow-md"
                style={{ color: "transparent" }}
                src="./_next/static/img/LINKEDIN.webp"
              />

              <a className="flex-1" href="https://www.facebook.com/">
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-slate-400">iamncdai</p>
              </a>


              <button
                aria-label="Copy"
                onClick={() => copyToClipboard('LinkedIn')}
                className="text-slate-500 transition-all hover:text-slate-400"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M15.5 13.15H13.33C11.55 13.15 10.1 11.71 10.1 9.92V7.75C10.1 7.34 9.77 7 9.35 7H6.18C3.87 7 2 8.5 2 11.18V17.82C2 20.5 3.87 22 6.18 22H12.07C14.38 22 16.25 20.5 16.25 17.82V13.9C16.25 13.48 15.91 13.15 15.5 13.15Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.82 2H15.85H14.76H11.93C9.67001 2 7.84001 3.44 7.76001 6.01C7.82001 6.01 7.87001 6 7.93001 6H10.76H11.85H13.82C16.13 6 18 7.5 18 10.18V12.15V14.86V16.83C18 16.89 17.99 16.94 17.99 16.99C20.22 16.92 22 15.44 22 12.83V10.86V8.15V6.18C22 3.5 20.13 2 17.82 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.98 7.15C11.67 6.84 11.14 7.05 11.14 7.48V10.1C11.14 11.2 12.07 12.1 13.21 12.1C13.92 12.11 14.91 12.11 15.76 12.11C16.19 12.11 16.41 11.61 16.11 11.31C15.02 10.22 13.08 8.27 11.98 7.15Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div
              role="link"
              tabIndex={0}
              className="flex cursor-pointer items-center space-x-4 rounded-xl p-4 border border-slate-700 bg-slate-800 transition-all hover:border-blue-500 select-none"
            >
              <img
                alt="GitHub"
                loading="lazy"
                width={48}
                height={48}
                decoding="async"
                data-nimg={1}
                className="rounded-xl shadow-md"
                style={{ color: "transparent" }}
                src="./_next/static/img/GITHUB.webp"
              />
              <a className="flex-1" href="https://www.facebook.com/">
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-slate-400">iamncdai</p>
              </a>
              <button
                aria-label="Copy"
                onClick={() => copyToClipboard('GitHub')}
                className="text-slate-500 transition-all hover:text-slate-400"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M15.5 13.15H13.33C11.55 13.15 10.1 11.71 10.1 9.92V7.75C10.1 7.34 9.77 7 9.35 7H6.18C3.87 7 2 8.5 2 11.18V17.82C2 20.5 3.87 22 6.18 22H12.07C14.38 22 16.25 20.5 16.25 17.82V13.9C16.25 13.48 15.91 13.15 15.5 13.15Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.82 2H15.85H14.76H11.93C9.67001 2 7.84001 3.44 7.76001 6.01C7.82001 6.01 7.87001 6 7.93001 6H10.76H11.85H13.82C16.13 6 18 7.5 18 10.18V12.15V14.86V16.83C18 16.89 17.99 16.94 17.99 16.99C20.22 16.92 22 15.44 22 12.83V10.86V8.15V6.18C22 3.5 20.13 2 17.82 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.98 7.15C11.67 6.84 11.14 7.05 11.14 7.48V10.1C11.14 11.2 12.07 12.1 13.21 12.1C13.92 12.11 14.91 12.11 15.76 12.11C16.19 12.11 16.41 11.61 16.11 11.31C15.02 10.22 13.08 8.27 11.98 7.15Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div
              role="link"
              tabIndex={0}
              className="flex cursor-pointer items-center space-x-4 rounded-xl p-4 border border-slate-700 bg-slate-800 transition-all hover:border-blue-500 select-none"
            >
              <img
                alt="Behance"
                loading="lazy"
                width={48}
                height={48}
                decoding="async"
                data-nimg={1}
                className="rounded-xl shadow-md"
                style={{ color: "transparent" }}
                src="./_next/static/img/BEHANCE.webp"
              />
              <a className="flex-1" href="https://www.facebook.com/">
                <h3 className="font-semibold">Behance</h3>
                <p className="text-slate-400">iamncdai</p>
              </a>
              <button
                aria-label="Copy"
                onClick={() => copyToClipboard('Behance')}
                className="text-slate-500 transition-all hover:text-slate-400"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M15.5 13.15H13.33C11.55 13.15 10.1 11.71 10.1 9.92V7.75C10.1 7.34 9.77 7 9.35 7H6.18C3.87 7 2 8.5 2 11.18V17.82C2 20.5 3.87 22 6.18 22H12.07C14.38 22 16.25 20.5 16.25 17.82V13.9C16.25 13.48 15.91 13.15 15.5 13.15Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.82 2H15.85H14.76H11.93C9.67001 2 7.84001 3.44 7.76001 6.01C7.82001 6.01 7.87001 6 7.93001 6H10.76H11.85H13.82C16.13 6 18 7.5 18 10.18V12.15V14.86V16.83C18 16.89 17.99 16.94 17.99 16.99C20.22 16.92 22 15.44 22 12.83V10.86V8.15V6.18C22 3.5 20.13 2 17.82 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.98 7.15C11.67 6.84 11.14 7.05 11.14 7.48V10.1C11.14 11.2 12.07 12.1 13.21 12.1C13.92 12.11 14.91 12.11 15.76 12.11C16.19 12.11 16.41 11.61 16.11 11.31C15.02 10.22 13.08 8.27 11.98 7.15Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div
              role="link"
              tabIndex={0}
              className="flex cursor-pointer items-center space-x-4 rounded-xl p-4 border border-slate-700 bg-slate-800 transition-all hover:border-blue-500 select-none"
            >
              <img
                alt="YouTube"
                loading="lazy"
                width={48}
                height={48}
                decoding="async"
                data-nimg={1}
                className="rounded-xl shadow-md"
                style={{ color: "transparent" }}
                src="./_next/static/img/YOUTUBE.webp"
              />
              <a className="flex-1" href="https://www.facebook.com/">
                <h3 className="font-semibold">YouTube</h3>
                <p className="text-slate-400">@ncdai</p>
              </a>
              <button
                aria-label="Copy"
                onClick={() => copyToClipboard('YouTube')}
                className="text-slate-500 transition-all hover:text-slate-400"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M15.5 13.15H13.33C11.55 13.15 10.1 11.71 10.1 9.92V7.75C10.1 7.34 9.77 7 9.35 7H6.18C3.87 7 2 8.5 2 11.18V17.82C2 20.5 3.87 22 6.18 22H12.07C14.38 22 16.25 20.5 16.25 17.82V13.9C16.25 13.48 15.91 13.15 15.5 13.15Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.82 2H15.85H14.76H11.93C9.67001 2 7.84001 3.44 7.76001 6.01C7.82001 6.01 7.87001 6 7.93001 6H10.76H11.85H13.82C16.13 6 18 7.5 18 10.18V12.15V14.86V16.83C18 16.89 17.99 16.94 17.99 16.99C20.22 16.92 22 15.44 22 12.83V10.86V8.15V6.18C22 3.5 20.13 2 17.82 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.98 7.15C11.67 6.84 11.14 7.05 11.14 7.48V10.1C11.14 11.2 12.07 12.1 13.21 12.1C13.92 12.11 14.91 12.11 15.76 12.11C16.19 12.11 16.41 11.61 16.11 11.31C15.02 10.22 13.08 8.27 11.98 7.15Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div
              role="link"
              tabIndex={0}
              className="flex cursor-pointer items-center space-x-4 rounded-xl p-4 border border-slate-700 bg-slate-800 transition-all hover:border-blue-500 select-none"
            >
              <img
                alt="Zalo"
                loading="lazy"
                width={48}
                height={48}
                decoding="async"
                data-nimg={1}
                className="rounded-xl shadow-md"
                style={{ color: "transparent" }}
                src="./_next/static/img/ZALO.webp"
              />
              <a className="flex-1" href="https://www.facebook.com/">
                <h3 className="font-semibold">Zalo</h3>
                <p className="text-slate-400">quaric</p>
              </a>
              <button
                aria-label="Copy"
                onClick={() => copyToClipboard('Zalo')}
                className="text-slate-500 transition-all hover:text-slate-400"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M15.5 13.15H13.33C11.55 13.15 10.1 11.71 10.1 9.92V7.75C10.1 7.34 9.77 7 9.35 7H6.18C3.87 7 2 8.5 2 11.18V17.82C2 20.5 3.87 22 6.18 22H12.07C14.38 22 16.25 20.5 16.25 17.82V13.9C16.25 13.48 15.91 13.15 15.5 13.15Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.82 2H15.85H14.76H11.93C9.67001 2 7.84001 3.44 7.76001 6.01C7.82001 6.01 7.87001 6 7.93001 6H10.76H11.85H13.82C16.13 6 18 7.5 18 10.18V12.15V14.86V16.83C18 16.89 17.99 16.94 17.99 16.99C20.22 16.92 22 15.44 22 12.83V10.86V8.15V6.18C22 3.5 20.13 2 17.82 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.98 7.15C11.67 6.84 11.14 7.05 11.14 7.48V10.1C11.14 11.2 12.07 12.1 13.21 12.1C13.92 12.11 14.91 12.11 15.76 12.11C16.19 12.11 16.41 11.61 16.11 11.31C15.02 10.22 13.08 8.27 11.98 7.15Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div
              onClick={handleOpen}
              id="myElement"
              role="link"
              className="flex cursor-pointer items-center space-x-4 rounded-xl p-4 border border-slate-700 bg-slate-800 transition-all hover:border-blue-500 select-none"
            >
              <img
                alt="MoMo"
                loading="lazy"
                width={48}
                height={48}
                decoding="async"
                data-nimg={1}
                className="rounded-xl shadow-md"
                style={{ color: "transparent" }}
                src="./_next/static/img/MOMO.webp"
              />
              <div className="flex-1" >
                <h3 className="font-semibold">MoMo</h3>
                <p className="text-slate-400">Get QR Code</p>
              </div>
            </div>
            <div
              id="imageContainer"
              style={{
                display: "none",
                backgroundColor: "rgba(0,0,0,.5)",
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 99,
                justifyContent: "center",
                width: "100%",
                height: "100%"
              }}
            >
              <img
                id="myImage"
                style={{ width: 384, height: 651, borderRadius: 10 }}
                src="https://chanhdai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fncdai-momo-qr-code.f27e538e.jpeg&w=304&q=100"
                alt="Image"
              />
            </div>
            <div
              role="link"
              tabIndex={0}
              className="flex cursor-pointer items-center space-x-4 rounded-xl p-4 border border-slate-700 bg-slate-800 transition-all hover:border-blue-500 select-none"
            >
              <img
                alt="PayPal"
                loading="lazy"
                width={48}
                height={48}
                decoding="async"
                data-nimg={1}
                className="rounded-xl shadow-md"
                style={{ color: "transparent" }}
                src="./_next/static/img/PAYPAL.webp"
              />
              <a className="flex-1" href="https://www.facebook.com/">
                <h3 className="font-semibold">PayPal</h3>
                <p className="text-slate-400">iamncdai</p>
              </a>
              <button
                aria-label="Copy"
                onClick={() => copyToClipboard('PayPal')}
                className="text-slate-500 transition-all hover:text-slate-400"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M15.5 13.15H13.33C11.55 13.15 10.1 11.71 10.1 9.92V7.75C10.1 7.34 9.77 7 9.35 7H6.18C3.87 7 2 8.5 2 11.18V17.82C2 20.5 3.87 22 6.18 22H12.07C14.38 22 16.25 20.5 16.25 17.82V13.9C16.25 13.48 15.91 13.15 15.5 13.15Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.82 2H15.85H14.76H11.93C9.67001 2 7.84001 3.44 7.76001 6.01C7.82001 6.01 7.87001 6 7.93001 6H10.76H11.85H13.82C16.13 6 18 7.5 18 10.18V12.15V14.86V16.83C18 16.89 17.99 16.94 17.99 16.99C20.22 16.92 22 15.44 22 12.83V10.86V8.15V6.18C22 3.5 20.13 2 17.82 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.98 7.15C11.67 6.84 11.14 7.05 11.14 7.48V10.1C11.14 11.2 12.07 12.1 13.21 12.1C13.92 12.11 14.91 12.11 15.76 12.11C16.19 12.11 16.41 11.61 16.11 11.31C15.02 10.22 13.08 8.27 11.98 7.15Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </section>
          <div className="sticky bottom-1 z-10 grid grid-cols-2 gap-2 rounded-xl p-2 border border-slate-700 bg-slate-800/80 backdrop-blur-md shadow-[0_0_8px_4px_rgba(0,0,0,0.25)]">
            <button
              type="button"
              className="flex items-center justify-center space-x-2 rounded-lg px-4 py-2  bg-slate-700 text-white transition-colors select-none group hover:bg-blue-600"
            >
              <i className="text-slate-400 transition-colors group-hover:text-blue-200">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M22.6667 27.3333H9.33335C5.33335 27.3333 2.66669 25.3333 2.66669 20.6667V11.3333C2.66669 6.66666 5.33335 4.66666 9.33335 4.66666H22.6667C26.6667 4.66666 29.3334 6.66666 29.3334 11.3333V20.6667C29.3334 25.3333 26.6667 27.3333 22.6667 27.3333Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16 17.16C14.88 17.16 13.7467 16.8133 12.88 16.1067L8.70665 12.7733C8.27999 12.4267 8.19999 11.8 8.54666 11.3733C8.89333 10.9467 9.52 10.8667 9.94666 11.2133L14.12 14.5467C15.1333 15.36 16.8533 15.36 17.8666 14.5467L22.04 11.2133C22.4667 10.8667 23.1067 10.9333 23.44 11.3733C23.7867 11.8 23.72 12.44 23.28 12.7733L19.1067 16.1067C18.2533 16.8133 17.12 17.16 16 17.16Z"
                    fill="currentColor"
                  />
                </svg>
              </i>
              <span className="font-medium">Send Email</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center space-x-2 rounded-lg px-4 py-2  bg-slate-700 text-white transition-colors select-none group hover:bg-blue-600"
            >
              <i className="text-slate-400 transition-colors group-hover:text-blue-200">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M18 3H6C3.79 3 2 4.78 2 6.97V17.03C2 19.22 3.79 21 6 21H18C20.21 21 22 19.22 22 17.03V6.97C22 4.78 20.21 3 18 3Z"
                    fill="currentColor"
                  />
                  <path
                    d="M19 8.75H14C13.59 8.75 13.25 8.41 13.25 8C13.25 7.59 13.59 7.25 14 7.25H19C19.41 7.25 19.75 7.59 19.75 8C19.75 8.41 19.41 8.75 19 8.75Z"
                    fill="currentColor"
                  />
                  <path
                    d="M19 12.75H15C14.59 12.75 14.25 12.41 14.25 12C14.25 11.59 14.59 11.25 15 11.25H19C19.41 11.25 19.75 11.59 19.75 12C19.75 12.41 19.41 12.75 19 12.75Z"
                    fill="currentColor"
                  />
                  <path
                    d="M19 16.75H17C16.59 16.75 16.25 16.41 16.25 16C16.25 15.59 16.59 15.25 17 15.25H19C19.41 15.25 19.75 15.59 19.75 16C19.75 16.41 19.41 16.75 19 16.75Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.49945 11.7899C9.77523 11.7899 10.8095 10.7557 10.8095 9.47992C10.8095 8.20414 9.77523 7.16992 8.49945 7.16992C7.22368 7.16992 6.18945 8.20414 6.18945 9.47992C6.18945 10.7557 7.22368 11.7899 8.49945 11.7899Z"
                    fill="currentColor"
                  />
                  <path
                    d="M9.29954 13.1098C8.76954 13.0598 8.21954 13.0598 7.68954 13.1098C6.00954 13.2698 4.65954 14.5998 4.49954 16.2798C4.48954 16.4198 4.52954 16.5598 4.62954 16.6598C4.72954 16.7598 4.85954 16.8298 4.99954 16.8298H11.9995C12.1395 16.8298 12.2795 16.7698 12.3695 16.6698C12.4595 16.5698 12.5095 16.4298 12.4995 16.2898C12.3295 14.5998 10.9895 13.2698 9.29954 13.1098Z"
                    fill="currentColor"
                  />
                </svg>
              </i>
              <span className="font-medium">Save Contact</span>
            </button>
          </div>
        </main>
        <footer className="space-y-4 pb-8 pt-4">
          <div className="flex items-center justify-center space-x-4">
            <a
              href="//www.dmca.com/Protection/Status.aspx?ID=85a452ca-06aa-4352-bfeb-7cb563dbd2b9&refurl=https://chanhdai.com"
              title="DMCA.com Protection Status"
              className="dmca-badge select-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=85a452ca-06aa-4352-bfeb-7cb563dbd2b9"
                alt="DMCA.com Protection Status"
                style={{ height: 24 }}
              />
            </a>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="select-none text-sm leading-none text-slate-400">
              © {/* */}2024{/* */} Quaric. All rights reserved.
            </span>
          </div>
        </footer>
      </div>
      {/*/$*/}
      {/*$*/}
      {/*/$*/}
      <div className="Toastify" />
      <div className="appl1_sgpt_float_box">
        <div className="appl1_sgpt_wrapper_questionbox appl1_sgpt_wrapper_questionbox_dark">
          <div style={{ display: "none" }}>
            <div
              className="appl1_sgpt_wrapper_questionbox_input"
              style={{ display: "block" }}
            >
              <div className="appl1_sgpt_wrapper_questionbox_input_cont">
                <textarea
                  placeholder="Ask me anything..."
                  maxLength={1000}
                  className="appl1_sgpt_wrapper_questionbox_input_textarea"
                  defaultValue={""}
                />
                <div className="appl1_sgpt_wrapper_questionbox_input_counter">
                  <p className="appl1_sgpt_wrapper_questionbox_input_counter_first">
                    0
                  </p>
                  /
                  <p className="appl1_sgpt_wrapper_questionbox_input_counter_second">
                    1000
                  </p>
                </div>
                <div className="appl1_sgpt_wrapper_questionbox_input_post" />
              </div>
            </div>
            <div
              className="appl1_sgpt_cnt appl1_sgpt_cnt_dark"
              style={{ display: "none" }}
            >
              <div className="appl1_sgpt_cnt_box">
                <div
                  className="appl1_sgpt_cnt_box_text"
                  style={{
                    animation: "auto ease 0s 1 normal none running none",
                    color: "rgb(89, 44, 255)"
                  }}
                >
                  Please enter a request
                </div>
              </div>
              <div className="appl1_sgpt_cnt_box_cross">
                <div className="cross" />
              </div>
            </div>
          </div>
          <div className="appl1_sgpt_float_box_buttons">
            <div className="appl1_sgpt_float_box_btn" />
            <div
              className="appl1_sgpt_float_box_btn_back"
              style={{ display: "none" }}
            />
          </div>
          <div
            className="appl1_sgpt_float_btn_hide_box"
            style={{ display: "block" }}
          />
        </div>
      </div>
      <next-route-announcer style={{ position: "absolute" }} />
      <div id="imageContainer" style={{ display: "none" }}>
        <img
          id="myImage"
          src="https://chanhdai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fncdai-momo-qr-code.f27e538e.jpeg"
          alt="Image"
        />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
        theme="colored"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src="https://chanhdai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fncdai-momo-qr-code.f27e538e.jpeg&w=384&q=100" alt="" srcset="" />

        </Box>
      </Modal>
    </>

  )
}

export default App
