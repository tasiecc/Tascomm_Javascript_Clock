Tascomm Javascript and CSS Analog/Digital Clock Application
    This project creates an interactive analog clock with a dynamic background using HTML, CSS, and JavaScript.

Overview
    The analog clock displays the current time with second, minute, and hour hands. The background image changes dynamically based on the time of day.

Users can customize the clock by changing:

    Hand colors
    Hand lengths
    Timezone
    Files
    index.html

Contains the HTML structure for the clock interface.

Important elements:
    div.clock - Holds the clock face with hands
    div.clock-face - Rotating element with clock hands
    div.hand - Hour, minute, second hands
    span#digital-time - Displays digital time
    input#hand-color - Changes hand color
    input#hand-length - Changes hand lengths
    select#timezone - Changes timezone
styles.css

    CSS to style the clock, hands, and backgrounds

script.js

    Contains JavaScript code powering the clock functionality

Functions
    setClock(): Called every second to update the time. Updates the second, minute, and hour hands as well as digital display.
    
    setSecondHand(): Positions the second hand based on current seconds in the time.
    
    setMinuteHand():  Positions minute hand based on current minutes.
    
    setHourHand(): Positions hour hand based on current hours in 12-hour format.
    
    setDigitalTime(): Updates the digital time display with current time.
    
    getTime(): Gets the current time based on selected timezone. Defaults to local browser time.
    
    updateBackground(): Changes background image based on time of day.
    
    customizeClock(): Applies color and length customizations to the clock hands.

Event Handlers: 
    setInterval(setClock, 1000):  Calls setClock every second to update the interface.
    
    timezoneSelector.addEventListener(): When timezone value changes, updates clock to that timezone.
    
    customizeButton.addEventListener(): Applies changes from customization inputs to the clock hands.

Usage
    The clock will initialize on page load and update itself every second.

To customize:

Use the color picker to change hands color
Enter values for hand lengths
Select a timezone from the dropdown
Click "Apply" to see changes

Credits
    JavaScript code 
    written by 
    Chidiebere Tasieobi
    Developer at Tascomm Technologies
    tasiecc@tascommtechnologies.com

Let me know if you would like any changes or have additional questions!
