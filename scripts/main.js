var before = document.getElementById("before");
var command = document.getElementById("input");
var textarea = document.getElementById("textbox");
var terminal = document.getElementById("terminal");
var git = 0;
var commands = [];

setTimeout(() => {
  printLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (e.keyCode == 13) {
    commands.push(command.innerHTML);
    git = commands.length;
    addLine("Utkarsh powershell:~$ " + command.innerHTML, "no-animation", 0);
    router(command.innerHTML.toLowerCase());
    command.innerHTML = "";
    textarea.value = "";
  }
  if (e.keyCode == 38 && git != 0) {
    git -= 1;
    textarea.value = commands[git];
    command.innerHTML = textarea.value;
  }
  if (e.keyCode == 40 && git != commands.length) {
    git += 1;
    if (commands[git] === undefined) {
      textarea.value = "";
    } else {
      textarea.value = commands[git];
    }
    command.innerHTML = textarea.value;
  }
}

function router(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      printLines(help, "color2 margin", 80);
      break;

    case "cat about":
    case "about":
      printLines(about, "color2 margin", 80);
      break;

    case "cat social":
    case "social":
      printLines(social, "color2 margin", 80);
      break;

    case "cat projects":
    case "projects":
      printLines(projects, "color2 margin", 80);
      break;

    case "cat links":
    case "links":
      printLines(links, "color2 margin", 80);
      break;

    case "cat banner":
      printLines(banner, "", 80);
      break;

    case "cat history":
      addLine("<br>", "", 0);
      printLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;

    case "cat email":
    case "email":
      addLine(
        'Opening mailto:<a href="mailto:phoenix.fireup7845@gmail.com">phoenix.fireup7845@gmail.com</a>...',
        "color2",
        80
      );
      openNewTab(email);
      break;

    case "clear":
      setTimeout(() => {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      printLines(banner, "", 80);
      break;

    case "cls":
      setTimeout(() => {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      printLines(banner, "", 80);
      break;

    case "pwd":
      addLine(
        "KP-5 Kalinga Institute of Industrial Technology [KIIT] Bhubaneswar, Odisha",
        "color2",
        0
      );
      break;

    case "date":
      var today = new Date();
      var dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      var timeOptions = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true, // Change to false for 24-hour format
      };
      var formattedDate = today.toLocaleDateString("en-US", dateOptions);
      var formattedTime = today.toLocaleTimeString("en-US", timeOptions);
      var formattedDateTime = formattedDate + " " + formattedTime;

      setTimeout(() => {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
        printLines([formattedDateTime], "before", 80);
      }, 1);
      break;

    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      openNewTab(linkedin);
      break;
    case "github":
      addLine("Opening Github...", "color2", 0);
      openNewTab(github);
      break;
    case "twitter":
      addLine("Opening twitter/X...", "color2", 0);
      openNewTab(twitter);
      break;

    case "hackerrank":
      addLine("Opening HackerRank...", "color2", 0);
      openNewTab(HackerRank);
      break;

    case "leetcode":
      addLine("Opening leetcode...", "color2", 0);
      openNewTab(leetcode);
      break;

    case "replit":
      addLine("Opening replit...", "color2", 0);
      openNewTab(replit);
      break;

    case "CV":
    case "cv":
      addLine("Opening Utkarsh CV...", "color2", 0);
      openNewTab(cv);
      break;

    // case "instagram":
    //     addLine("Opening Instagram...", "color2", 0);
    //     openNewTab(instagram);
    //     break;

      case "SudokuSolver":
      case "sudokusolver":
      addLine("Opening SudokuSolver...", "color2", 0);
      openNewTab(SudokuSolver);
      break;
      

    case "ls":
      addLine(
        "So you are a real programmer at heart ❤️. PS. It's just a website! Dude<br>",
        "color2",
        0
      );
      break;

    case "cd":
      addLine(
        "So you are a real programmer at heart ❤️. PS. It's just a website! Dude<br>",
        "color2",
        0
      );
      break;

    case "sudo":
      addLine(
        "Woah Woah Woah!! Relax!! bro! it's not a real Terminal just a Website <br>",
        "color2",
        0
      );
      break;

    case "exit":
      window.opener = null;
      window.close();
      addLine(
        "If the window doesn't close, it might be because of a safety feature Close the tab manually!",
        "color2",
        0
      );
      break;

    default:
      addLine(
        '<span class="inherit">Command not found. For a list of commands, type <span class="command">\'help\'</span>.</span>',
        "error",
        100
      );
      break;
  }
}

function printLines(name, style, time) {
  name.forEach((item, index) => {
    addLine(item, style, index * time);
  });
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }

  setTimeout(() => {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function openNewTab(link) {
  setTimeout(() => {
    window.open(link, "_blank");
  }, 500);
}
