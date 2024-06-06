# ChatMemo Documentation
*by Anna Lebedeva*
## User Manual
### Create New Chat
- Click on create New Chat icon at the top of the Users Panel
- A modal will pop up
- Input the required information and click Open New Chat button
- Newly created chat will open on the Chat Panel

### Select User
- Click on a user in the Users Panel
- The chat for that user will appear in the Chat Panel, with previously saved messages

### Delete User
+ On Mobile
  - On the User Panel, swipe left on a user to delete a user
  - User is now deleted and does not appear in the Users Panel
+ On Desktop
  - In the Chat Panel, click on the Delete icon in the upper right hand corner
  - A modal will pop up with a delete confirmation, select Yes or No
  - User is now deleted and does not appear in the Users Panel

### View User Info
- In the Chat Panel, press the Info icon
- A modal will pop up with the user's information
- Close the modal by clicking away, pressing the Escape key, or clicking the Close icon 

### Send Messages
- In the Chat Panel, click on the input area at the bottom and write a message
- Either click the Send button or press the Enter key to send the message
- The sent message will now appear in the Chat Panel with the timestamp

### Switch between Chat and Users Panels on Mobile 
- Use the footer with two icons representing Chat Panel and Users Panel to navigate between the panels
  
## Choices Made
- This project uses Next.js with TailwindCSS
  + Though unfortunately the SSR capabilities of Next could not be used since this is a front-end-only project
  + Next CSS Modules were used
- I chose to not use TypeScript as there was limited time for this project, but in another scenario I would have used it
- For a good user experience I chose a popular chat layout with the Users Panel on the right side, and the chat on the left
- For accessibility, I chose to use contrasting colors and the ability to use only the keyboard to navigate in the app
- To fix the hydration issue of having two different DOM trees for mobile and desktop I used next/dynamic for lazy loading
- For a good user experience, the User Panel is resizable

## Features and Improvements 
- Add the capability for a user-to-user connection using Socket.io or Firebase
  + Typing animation when other user is typing
  + Add read/unread icon
- Add ability to pin messages to top of User Panel (prioritize)
- Bring most recently chatted with user to the top of the User Panel
- Add the capability to send messages with different formats such as images, video, or documents
- Add a preview of the last sent message in the chat under each user in the User Panel
- Change the timestamp to reflect time passed since message sent
- Multiline message capability
- Save drafts (unsent messages) inside each chat
- Be able to chat with groups of people instead of just one user
  + View who is in the group
  + Add/remove people from group
- Save scroll position when navigating between chats/panels
- Be able to add reactions to messages
- Dark vs light mode
- Customizable color theme
- Animations for changing panels in mobile
- Search for users
- Search inside each chat
- Improve mobile experience
- Push notifications
- Login page
- Unit testing
