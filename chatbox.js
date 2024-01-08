
// Selecting DOM elements
const textarea = document.querySelector('.chatbox-message-input');
const chatboxForm = document.querySelector('.chatbox-message-form');
const chatboxToggle = document.querySelector('.chatbox-toggle');
const chatboxMessage = document.querySelector('.chatbox-message-wrapper');
const dropdownToggle = document.querySelector('.chatbox-message-dropdown-toggle');
const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu');
const chatboxMessageWrapper = document.querySelector('.chatbox-message-content');
const chatboxNoMessage = document.querySelector('.chatbox-message-no-message');

// Adjusting textarea height based on input
textarea.addEventListener('input', function () {
    let line = textarea.value.split('\n').length;

    if (textarea.rows < 6 || line < 6) {
        textarea.rows = line;
    }

    if (textarea.rows > 1) {
        chatboxForm.style.alignItems = 'flex-end';
    } else {
        chatboxForm.style.alignItems = 'center';
    }
});

// Toggling chatbox visibility
chatboxToggle.addEventListener('click', function () {
    chatboxMessage.classList.toggle('show');
});

// Toggling dropdown visibility
dropdownToggle.addEventListener('click', function () {
    dropdownMenu.classList.toggle('show');
});

// Closing dropdown when clicking outside
document.addEventListener('click', function (e) {
    if (!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
        dropdownMenu.classList.remove('show');
    }
});

// Handling form submission
chatboxForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (isValid(textarea.value)) {
        writeMessage();
        setTimeout(autoReply, 1000);
    }
});

// Function to add leading zeros to a number
function addZero(num) {
    return num < 10 ? '0' + num : num;
}

// Array of possible responses for automatic replies
const possibleResponses = [
    //hi
    "Thank you for your message!",
    //"Hi, I'm looking for a new outfit. Any recommendations?"
    "Hello! Sure, I'd love to help. Are you looking for something casual, formal, or a specific style?",
    //"I need a dress for a special occasion. What do you have?"
    "Certainly! We have a range of elegant dresses for special occasions.",
    // "I'm looking for a gift – maybe a stylish shirt. Any recommendations?"
    "Absolutely! A stylish shirt makes a fantastic gift. What's the recipient's style – casual or formal?",
    //I'm in need of information about... Can you help?"
    "Feel free to ask me anything!",
    //thank you
    "You're welcome! If you have more questions or need assistance, feel free to ask."
    
];

// Index to keep track of the current automatic reply
let responseIndex = 0;

// Function to generate an automatic reply and add it to the chatbox
function autoReply() {
    const today = new Date();
    const currentResponse = possibleResponses[responseIndex];

    // Constructing HTML for the automatic reply
    let message = `
        <div class="chatbox-message-item received">
            <span class="chatbox-message-item-text">
                ${currentResponse}
            </span>
            <span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
        </div>
    `;

    // Adding the automatic reply to the chatbox
    chatboxMessageWrapper.insertAdjacentHTML('beforeend', message);
    // Scrolling to the bottom of the chatbox
    scrollBottom();

    // Incrementing the response index for the next automatic reply
    responseIndex++;

    // Resetting the index to start over if reached the end of responses
    if (responseIndex === possibleResponses.length) {
        responseIndex = 0;
    }
}

// Function to scroll the chatbox to the bottom
function scrollBottom() {
    chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight);
}

// Function to check if the input value is valid (not empty or whitespace)
function isValid(value) {
    let text = value.replace(/\n/g, '');
    text = text.replace(/\s/g, '');

    return text.length > 0;
}

// Function to write the user's message to the chatbox
function writeMessage() {
    const today = new Date();
    let message = `
        <div class="chatbox-message-item sent">
            <span class="chatbox-message-item-text">
                ${textarea.value.trim().replace(/\n/g, '<br>\n')}
            </span>
            <span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
        </div>
    `;

    chatboxMessageWrapper.insertAdjacentHTML('beforeend', message);
    chatboxForm.style.alignItems = 'center';
    textarea.rows = 1;
    textarea.focus();
    textarea.value = '';
    chatboxNoMessage.style.display = 'none';
    scrollBottom();
}
