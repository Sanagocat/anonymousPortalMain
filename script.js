document.getElementById('photos').addEventListener('click', handlePhotosClick);
document.getElementById('icloud').addEventListener('click', handleIcloudClick);
document.getElementById('mail').addEventListener('click', handleMailClick);
document.getElementById('calendar').addEventListener('click', handleCalendarClick);
document.getElementById('chat').addEventListener('click', onEnterChatService);
document.getElementById('blog').addEventListener('click', onEnterBlogService);

//on load init page -> check Auth function
window.onload = async function(){
  if(await checkAuthAndRedirect() == false){ //if NOT LOG IN
    //Redirect to login.html
     window.location.href = 'login.html';
  }
}

function onEnterBlogService() {
  window.location.href = 'https://blog.anonymousportal.com'
  console.log('Blog 버튼이 클릭되었습니다.');
}

function onEnterChatService() {
  window.location.href = "https://chat.anonymousportal.com";
  console.log('Chat 버튼이 클릭되었습니다.');
}

function handlePhotosClick() {
  alert('Photos 버튼이 클릭되었습니다.');
}

function handleIcloudClick() {
  alert('iCloud 버튼이 클릭되었습니다.');
}

function handleMailClick() {
  alert('Mail 버튼이 클릭되었습니다.');
}

function handleCalendarClick() {
  alert('Calendar 버튼이 클릭되었습니다.');
}
