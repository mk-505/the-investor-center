# 🤖 Simulated Ball-Chasing Differential Drive Robot (ROS)

This project demonstrates a simulated differential drive robot in a custom Gazebo world that autonomously chases a ball using camera input. It combines robotics simulation, machine learning-based computer vision, and service-based control using **ROS (Robot Operating System)**.

## 📦 ROS Packages

The project consists of two core ROS packages:

### 1. `my_robot`

- Defines the **URDF model** of the differential drive robot.
- Sets up a **custom Gazebo world** that includes:
  - Realistic environment
  - The robot and the ball
- Integrates:
  - Gazebo plugins for differential drive and camera
  - RViz for robot and sensor visualization

### 2. `ball_chaser`

- Implements the robot behavior logic:
  - `drive_bot`: ROS node exposing a `command_robot` service that sets robot velocity.
  - `process_image`: Subscribes to the robot's camera image stream, runs a **YOLOv5 deep learning model** to detect the ball, and requests the appropriate velocity command from `command_robot`.

## 🧠 System Architecture

```
[ Camera Image Stream ] ---> [ process_image Node (YOLOv5) ]
                                   |
                                   v
                            [ command_robot Service ]
                                   |
                                   v
                            [ drive_bot Node ] ---> [ /cmd_vel ]
```

## 🛠 Technologies Used

- **ROS Noetic** (or ROS1)
- **Gazebo** for physics-based simulation
- **URDF** for robot modeling
- **RViz** for sensor and robot visualization
- **PyTorch + OpenCV** for real-time image inference
- **TorchScript YOLOv5 model** for ball detection
- **ROS Services & Nodes** for modular control

## 🚀 How to Launch

1. **Clone the repository** into your ROS workspace:

```bash
cd ~/catkin_ws/src
git clone https://github.com/yourusername/ball-chasing-robot.git
cd ~/catkin_ws && catkin_make
source devel/setup.bash
```

2. **Launch the simulation**:

```bash
roslaunch my_robot world.launch
```

3. **Launch the ball chaser**:

```bash
roslaunch ball_chaser ball_chaser.launch
```

The robot will start detecting and moving toward the ball using its onboard camera and YOLOv5 object detection.

> ⚠️ Note: Ensure your trained YOLOv5 model is saved as a TorchScript `.pt` file and the correct path is provided in `process_image.cpp`.

## 🔍 Visualization

- **RViz** is included to visualize:
  - Robot's camera sensor
  - Joint states and transforms
  - World geometry

## 🏗 Robot Design

- **Differential Drive** using Gazebo plugin
- **Camera Sensor** for visual input
- **URDF Modeling** includes:
  - Links and joints
  - Inertial and visual elements
  - Sensor mounting

## 🎯 Ball Detection Logic (YOLOv5 Upgrade)

- The `process_image` node runs a deep learning object detector (YOLOv5) on the image feed.
- The ball is identified based on bounding box center position:
  - If left of center → turn left
  - If center → move forward
  - If right → turn right
- No white pixel logic — now robust to lighting, size, and color variations

## 📬 Contact

Built with 🛠 and ❤️ by Manroop Kalsi
