let videoPlay = document.querySelector("#myvideo");
const showCase = document.querySelector("#showcase");

videoPlay.onended = (event) => {
  /* window.scroll(0,window.innerHeight) */
  showCase.style.zIndex = '102';
}
  