# AI Text Summarize App

This AI Text Summarize App is designed to take in a body of text and provide concise summaries by utilizing AI/ML APIs. Built as part of a project-based learning module on Postman Academy, this app showcases the integration of machine learning models with API calls to deliver accurate and effective text summarization.

## Features
- Summarizes input text using AI/ML model APIs
- Provides concise and informative summaries
- User-friendly interface for ease of use
- Modular and scalable code design

## Technologies Used
- **Postman**: API testing and integration
- **Node.js**: Server-side JavaScript runtime
- **Express**: Framework for handling API requests
- **Fetch API / Axios**: For making HTTP requests to the AI/ML API

---

## Installation

Follow these steps to set up and run the AI Text Summarize App locally.

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v12.0 or later)
- [Git](https://git-scm.com/)

### Steps

1. **Clone the Repository**

2. **Install Dependencies**
   Run the following command to install the required dependencies:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the root directory.
   - Add your API key and endpoint URL from the AI/ML model provider:
     ```
     API_KEY=your_api_key_here
     API_ENDPOINT=https://api.modelprovider.com/summarize
     ```

4. **Run the Application**
   Start the application with the command:
   ```bash
   npm start
   ```

5. **Access the App**
   Open your browser and go to `http://localhost:3000` to use the app.

---

## Usage

1. **Input Text**: Enter the text you want summarized in the text area provided.
2. **Generate Summary**: Click on the "Summarize" button to generate a summary.
3. **View Summary**: The app will call the AI/ML API and display a concise summary of the input text.

---

## Project Structure

- `index.js`: Main server file, handles routing and API requests.
- `public/`: Static files like HTML and CSS.
- `src/`: Contains the main logic for API integration and response handling.
- `.env`: Environment variables (do not share this file).

---

## Contributing

Feel free to open issues or submit pull requests with improvements or bug fixes. Contributions are welcome!

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

Thanks to Postman Academy for the training and resources that made this project possible. 

---

