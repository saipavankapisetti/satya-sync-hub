import { Product } from '@/contexts/StoreContext';

// Import product images
import arduinoUno from '@/assets/arduino-uno.jpg';
import raspberryPi from '@/assets/raspberry-pi.jpg';
import ultrasonicSensor from '@/assets/ultrasonic-sensor.jpg';
import esp32 from '@/assets/esp32.jpg';
import servoMotor from '@/assets/servo-motor.jpg';
import oledDisplay from '@/assets/oled-display.jpg';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Arduino Uno R3 Development Board',
    price: 2500,
    image: arduinoUno,
    category: 'arduino',
    rating: 5,
    description: 'The Arduino Uno R3 is a microcontroller board with 14 digital input/output pins, 6 analog inputs, and a USB connection.',
    stock: 50,
    brand: 'Arduino'
  },
  {
    id: '2',
    name: 'Raspberry Pi 4 Model B - 4GB RAM',
    price: 8500,
    image: raspberryPi,
    category: 'raspberry-pi',
    rating: 5,
    description: 'Raspberry Pi 4 Model B with 4GB LPDDR4 RAM, dual-band wireless LAN, Bluetooth 5.0, and Gigabit Ethernet.',
    stock: 25,
    brand: 'Raspberry Pi'
  },
  {
    id: '3',
    name: 'HC-SR04 Ultrasonic Distance Sensor',
    price: 350,
    image: ultrasonicSensor,
    category: 'sensors',
    rating: 4,
    description: 'Ultrasonic sensor module for distance measurement with 2cm-400cm range and high accuracy.',
    stock: 100,
    brand: 'Generic'
  },
  {
    id: '4',
    name: 'ESP32 DevKit V1 WiFi Bluetooth Board',
    price: 1200,
    image: esp32,
    category: 'communication',
    rating: 5,
    description: 'ESP32 development board with built-in WiFi and Bluetooth, perfect for IoT projects.',
    stock: 75,
    brand: 'Espressif'
  },
  {
    id: '5',
    name: 'SG90 Micro Servo Motor',
    price: 280,
    image: servoMotor,
    category: 'motors',
    rating: 4,
    description: 'Small and lightweight servo motor with 180-degree rotation, perfect for robotics projects.',
    stock: 8,
    brand: 'TowerPro'
  },
  {
    id: '6',
    name: '0.96" OLED Display Module I2C',
    price: 450,
    image: oledDisplay,
    category: 'displays',
    rating: 5,
    description: '128x64 pixel OLED display with I2C interface, perfect for displaying sensor data and status.',
    stock: 60,
    brand: 'Generic'
  },
  {
    id: '7',
    name: 'Arduino Nano V3.0 ATmega328P',
    price: 1500,
    image: arduinoUno,
    category: 'arduino',
    rating: 4,
    description: 'Compact Arduino board with the same functionality as Arduino Uno in a smaller form factor.',
    stock: 40,
    brand: 'Arduino'
  },
  {
    id: '8',
    name: 'DHT22 Temperature Humidity Sensor',
    price: 680,
    image: ultrasonicSensor,
    category: 'sensors',
    rating: 4,
    description: 'Digital temperature and humidity sensor with high accuracy and calibrated output.',
    stock: 35,
    brand: 'Generic'
  },
  {
    id: '9',
    name: 'L298N Motor Driver Module',
    price: 420,
    image: servoMotor,
    category: 'motors',
    rating: 4,
    description: 'Dual H-bridge motor driver for controlling DC motors and stepper motors.',
    stock: 55,
    brand: 'Generic'
  },
  {
    id: '10',
    name: 'NodeMCU ESP8266 WiFi Development Board',
    price: 850,
    image: esp32,
    category: 'communication',
    rating: 4,
    description: 'ESP8266-based development board with built-in WiFi for IoT applications.',
    stock: 45,
    brand: 'NodeMCU'
  },
  {
    id: '11',
    name: 'Raspberry Pi Camera Module V2',
    price: 3200,
    image: raspberryPi,
    category: 'raspberry-pi',
    rating: 5,
    description: '8-megapixel camera module compatible with all Raspberry Pi models.',
    stock: 20,
    brand: 'Raspberry Pi'
  },
  {
    id: '12',
    name: '16x2 LCD Display with I2C Backpack',
    price: 550,
    image: oledDisplay,
    category: 'displays',
    rating: 4,
    description: '16x2 character LCD with I2C interface for easy connection and control.',
    stock: 30,
    brand: 'Generic'
  }
];