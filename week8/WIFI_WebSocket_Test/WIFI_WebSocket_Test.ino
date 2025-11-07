#include <ArduinoHttpClient.h>
#include <WiFiS3.h>
#include "Arduino_LED_Matrix.h"
#include "arduino_secrets.h"

ArduinoLEDMatrix matrix;

uint8_t frame[8][12] = {0};
int ledCount = 0;
const int maxLEDs = 8 * 12;

/////// Wifi Settings ///////
char ssid[] = SECRET_SSID;
char pass[] = SECRET_PASS;

char serverAddress[] = "10.0.6.11"; // update with your server's IP Address
int port = 8080;

WiFiClient wifi;
WebSocketClient client = WebSocketClient(wifi, serverAddress, port);
int status = WL_IDLE_STATUS;

const int potentiometerPin = A0;
int potentiometerValue = 0;
unsigned long lastSentTime = 0;

void setup() {
  Serial.begin(9600);
  matrix.begin();

  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to Network named: ");
    Serial.println(ssid);
    status = WiFi.begin(ssid, pass);
    delay(1000);
  }

  Serial.print("Connected to WiFi, IP Address: ");
  Serial.println(WiFi.localIP());
  client.begin();
}

void loop() {
  if (client.connected()) {
    int messageSize = client.parseMessage();
    String socketString = client.readString();

    if (messageSize > 0) {
      Serial.println("Received a message:");
      Serial.println(socketString);

      if (socketString == "ADD_1_LED") {
        addLED();
      } else if (socketString == "REMOVE_1_LED") {
        removeLED();
      }
    }
  } else {
    Serial.println("Reconnecting WebSocket client...");
    client.begin();
  }

  updateMatrixDisplay();

  unsigned long currentTime = millis();
  if (currentTime - lastSentTime > 500) {
    potentiometerValue = analogRead(potentiometerPin);
    sendPotentiometerData(potentiometerValue);
    lastSentTime = currentTime;
  }

  delay(10);
}

void addLED() {
  if (ledCount < maxLEDs) {
    ledCount++;
    Serial.print("LED Count Increased: ");
    Serial.println(ledCount);
  }
}

void removeLED() {
  if (ledCount > 0) {
    ledCount--;
    Serial.print("LED Count Decreased: ");
    Serial.println(ledCount);
  }
}

void updateMatrixDisplay() {
  memset(frame, 0, sizeof(frame));
  for (int i = 0; i < ledCount; i++) {
    int row = i / 12;
    int col = i % 12;
    frame[row][col] = 1;
  }
  matrix.renderBitmap(frame, 8, 12);
}

void sendPotentiometerData(int value) {
  String message = "{\"potentiometer\": " + String(value) + "}";
  client.beginMessage(TYPE_TEXT);
  client.print(message);
  client.endMessage();
  Serial.print("Sent potentiometer data: ");
  Serial.println(message);
}