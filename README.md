# FastLED 16x16 matrix generator
https://fastledmatrixgenerator.netlify.app/

This is the source code for a generator to create code for a 16x16 matrix combined with FastLED. I assume that you can and have connected the LED matrix to your board and that you are familiar with programming Arduino.

## .ino-code
```#include "FastLED.h"

#define NUM_LEDS 256
#define DATA_PIN 5

CRGB leds[NUM_LEDS];

struct Color {
  uint8_t r; // Red
  uint8_t g; // Green
  uint8_t b; // Blue
};

struct Data {
  int num;      // Led
  Color color;  // Color
};

// Insert generated code here
Data data[] = {};

const int dataSize = sizeof(data) / sizeof(data[0]);

void setup() {
  delay(2000);
  FastLED.addLeds<WS2812B, DATA_PIN, RGB>(leds, NUM_LEDS);
  FastLED.setBrightness(90); //Number 0-255
  FastLED.clear();
}

void loop() {
  delay(1000);
  for (int i = 0; i < dataSize; i++) {
    leds[data[i].num].r = data[i].color.g; 
    leds[data[i].num].g = data[i].color.r; 
    leds[data[i].num].b = data[i].color.b;
  }
  FastLED.show();  
}
```