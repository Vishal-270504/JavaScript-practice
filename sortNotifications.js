// 2. Build Notification Feed(Recent First)
// You are given notifications with message and timestamp.Return messages sorted from latest to oldest(no built -in sort).

//     Task:
// Loop and compare timestamps manually
// Arrange messages in descending order
// Return new array of messages

function sortNotifications(notifications) {
    for (let i = 0; i < notifications.length; i++) {
        for (let j = 0; j < notifications.length - i - 1; j++) {
            let current = notifications[j].timestamp;
            let next = notifications[j + 1].timestamp;

            if (current < next) {
                let temp = notifications[j];
                notifications[j] = notifications[j + 1];
                notifications[j + 1] = temp;
            }
        }
    }

    let messages = [];

    for (let i = 0; i < notifications.length; i++) {
        messages.push(notifications[i].message);
    }

    return messages;
}
console.log(sortNotifications([
    { message: "A", timestamp: 1 },
    { message: "B", timestamp: 3 },
    { message: "C", timestamp: 2 }
]));
// Expected:
// ["B", "C", "A"]