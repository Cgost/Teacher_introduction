options = {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric'
};
const clock = () => dateTime.innerText=new Intl.DateTimeFormat('en-EN', options).format(new Date())
clock()
setInterval(clock, 1000);