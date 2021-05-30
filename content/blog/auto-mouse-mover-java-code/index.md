---
title: Auto mouse mover Java code
date: "2021-04-01T00:00:03.284Z"
description: "Auto Mouse Mover/Jiggler Program for Desktop activity in Java"
---

Auto Mouse Mover program allows mouse to move automatically without human interaction and keeps the computer without log off. One more advantage is it keeps the Skype or Microsoft Teams activity online(green) without inactivity status.

Save the below java program in a file and run it whenever necessary. No third party installation software needed. 

```java
package dev.stackbyte;

import java.awt.Robot;
import java.util.Random;

public class MouseMovement {
    public static final int FIVE_SECONDS = 5000;
    public static final int MAX_Y = 400;
    public static final int MAX_X = 400;

    public static void main(String... args) throws Exception {
        Robot robot = new Robot();
        Random random = new Random();
        while (true) {
            robot.mouseMove(random.nextInt(MAX_X), random.nextInt(MAX_Y));
            Thread.sleep(FIVE_SECONDS);
        }
    }
}
```