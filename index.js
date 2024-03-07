const TelegramBot = require("node-telegram-bot-api");
const OpenAI = require("openai").OpenAI;

const TELEGRAM_TOKEN = "<TELEGRAM_TOKEN>"; // Replace with your Telegram token
const OPENAI_API_KEY = "<OPENAI_API_KEY>"; // Replace with your OpenAI API key

const histories = {
  id: {
    threadId: "id",
  },
};

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

class Business {
  static name = "Estética Canina Peluchin";
  static services = {
    Baño: 100,
    "Corte de pelo": 150,
    "Corte de uñas": 50,
    "Limpieza de oídos": 50,
    "Limpieza de glándulas anales": 50,
  };
  static branches = {
    cumbres: {
      address: "Av. Paseo de los Leones 123",
      phone: "1234567890",
      booked: {
        monday: [
          {
            time: "13:00",
            service: "Baño",
            pet: {
              name: "Firulais",
              breed: "Chihuahua",
            },
          },
        ],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: [],
      },
      schedule: {
        monday: [
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
        ],
        tuesday: [
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
        ],
        wednesday: [
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
        ],
        thursday: [
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
        ],
        friday: [
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
        ],
        saturday: [
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
        ],
        sunday: [
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
        ],
      },
    },
    "san pedro": {
      address: "Av. Vasconcelos 456",
      phone: "0987654321",
      booked: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: [],
      },
      schedule: {
        monday: [
          "8:00",
          "8:30",
          "9:00",
          "9:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
          "16:30",
          "17:00",
          "17:30",
          "18:00",
          "18:30",
          "19:00",
          "19:30",
          "20:00",
        ],
        tuesday: [
          "8:00",
          "8:30",
          "9:00",
          "9:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
          "16:30",
          "17:00",
          "17:30",
          "18:00",
          "18:30",
          "19:00",
          "19:30",
          "20:00",
        ],
        wednesday: [
          "8:00",
          "8:30",
          "9:00",
          "9:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
          "16:30",
          "17:00",
          "17:30",
          "18:00",
          "18:30",
          "19:00",
          "19:30",
          "20:00",
        ],
        thursday: [
          "8:00",
          "8:30",
          "9:00",
          "9:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
          "16:30",
          "17:00",
          "17:30",
          "18:00",
          "18:30",
          "19:00",
          "19:30",
          "20:00",
        ],
        friday: [],
        saturday: [
          "8:00",
          "8:30",
          "9:00",
          "9:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
        ],
        sunday: [
          "8:00",
          "8:30",
          "9:00",
          "9:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
        ],
      },
    },
    centro: {
      address: "Av. Juárez 789",
      phone: "6789054321",
      booked: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: [],
      },
      schedule: {
        monday: [
          "8:00",
          "8:30",
          "9:00",
          "9:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
          "16:30",
          "17:00",
          "17:30",
          "18:00",
          "18:30",
          "19:00",
          "19:30",
          "20:00",
        ],
        tuesday: [
          "8:00",
          "8:30",
          "9:00",
          "9:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
          "16:30",
          "17:00",
          "17:30",
          "18:00",
          "18:30",
          "19:00",
          "19:30",
          "20:00",
        ],
        wednesday: [
          "8:00",
          "8:30",
          "9:00",
          "9:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
          "16:30",
          "17:00",
          "17:30",
          "18:00",
          "18:30",
          "19:00",
          "19:30",
          "20:00",
        ],
        thursday: [
          "8:00",
          "8:30",
          "9:00",
          "9:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
          "16:30",
          "17:00",
          "17:30",
          "18:00",
          "18:30",
          "19:00",
          "19:30",
          "20:00",
        ],
        friday: [
          "8:00",
          "8:30",
          "9:00",
          "9:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
          "16:30",
          "17:00",
          "17:30",
          "18:00",
          "18:30",
          "19:00",
          "19:30",
          "20:00",
        ],
        saturday: [],
        sunday: [],
      },
    },
  };
  static booked = {
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  };

  static getServices() {
    return Business.services;
  }

  static getCenters() {
    return Business.branches;
  }

  static getSchedule(center, day) {
    return this.branches[center].schedule[day];
  }

  static getBooked(center, day) {
    return this.branches[center].booked[day];
  }

  static book(center, day, time, service, pet = {}) {
    const { name, breed } = data;
    this.branches[center].booked[day].push({
      time,
      service,
      pet: { name, breed },
    });
  }
}

class BusinessTool {
  static functions = {
    get_centers: Business.getCenters,
    get_services: Business.getServices,
    get_booked: Business.getBooked,
    book: Business.book,
  };

  static call(tool, args = "{}") {
    const parsedArguments = JSON.parse(args);

    switch (tool) {
      case "get_centers":
        return BusinessTool.functions.get_centers();
      case "get_services":
        return BusinessTool.functions.get_services();
      case "get_booked":
        return BusinessTool.functions.get_booked(
          parsedArguments.center,
          parsedArguments.day
        );
      case "book":
        return BusinessTool.functions.book(
          parsedArguments.center,
          parsedArguments.day,
          parsedArguments.time,
          parsedArguments.service,
          JSON.stringify(parsedArguments.pet)
        );
    }
  }
}

let assistant;
openai.beta.assistants.retrieve("asst_onNjDk03L5IxVBmjXNQwLnTg").then((res) => {
  assistant = res;
});

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text;

  let thread;

  if (histories[chatId]) {
    const threadId = histories[chatId].threadId;
    thread = await openai.beta.threads.retrieve(threadId);
  } else {
    thread = await openai.beta.threads.create();
    histories[chatId] = { threadId: thread.id };
  }

  await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: message,
  });

  const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: assistant.id,
  });

  const messages = await new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      const { status, required_action } =
        await openai.beta.threads.runs.retrieve(thread.id, run.id);

      if (
        status === "requires_action" &&
        required_action.type === "submit_tool_outputs"
      ) {
        const call = required_action.submit_tool_outputs.tool_calls[0];

        await openai.beta.threads.runs.submitToolOutputs(thread.id, run.id, {
          tool_outputs: [
            {
              tool_call_id: call.id,
              output: JSON.stringify(
                BusinessTool.call(call.function.name, call.function.arguments)
              ),
            },
          ],
        });
      }

      if (
        status === "cancelled" ||
        status === "cancelling" ||
        status === "expired" ||
        status === "failed"
      ) {
        reject("Error processing the request. Please try again.");
        clearInterval(interval);
      }

      if (status === "completed") {
        const messages = await openai.beta.threads.messages.list(thread.id);
        resolve(messages);
        clearInterval(interval);
      }
    }, 500);
  });

  const response = messages.data[0].content[0].text.value;

  bot.sendMessage(chatId, response);
});
