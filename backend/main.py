from flask import Flask, request, jsonify
import ollama

app = Flask(__name__)


@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    messages = data.get('messages') # type: ignore
    
    if not isinstance(messages, list) or not all(isinstance(msg, dict) and 'role' in msg and 'content' in msg for msg in messages):
        return jsonify({'error': 'Messages must be a list of objects with "role" and "content" fields'}), 400

    response = ollama.chat(
        model='llama3.2',
        messages=messages
    )

    response_content = response['message']['content']

    return jsonify({'response': response_content})


if __name__ == '__main__':
    app.run(debug=True)
