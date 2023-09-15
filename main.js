const iconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjM2cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjM2cHgiIGZpbGw9IiMwMDAwMDAiPjxnPjxwYXRoIGQ9Ik0wLDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvZz48Zz48Zz48cGF0aCBkPSJNMTEsNkg5VjRoMlY2eiBNMTUsNGgtMnYyaDJWNHogTTksMTRoMnYtMkg5VjE0eiBNMTksMTBWOGgtMnYySDE5eiBNMTksMTR2LTJoLTJ2MkgxOXogTTEzLDE0aDJ2LTJoLTJWMTR6IE0xOSw0aC0ydjJoMiBWNHogTTEzLDhWNmgtMnYySDEzeiBNNywxMFY4aDJWNkg3VjRINXYxNmgydi04aDJ2LTJIN3ogTTE1LDEyaDJ2LTJoLTJWMTJ6IE0xMSwxMHYyaDJ2LTJIMTF6IE05LDh2MmgyVjhIOXogTTEzLDEwaDJWOGgtMlYxMHogTTE1LDZ2MmgyVjZIMTV6Ii8+PC9nPjwvZz48L3N2Zz4=';

// Core, Team, and Official extension classes should be registered statically with the Extension Manager.
// See: scratch-vm/src/extension-support/extension-manager.js
class Scratch3YoloBitRobocon {

    getInfo () {
        return {
            id: 'YoloBitRoboconExtension',
            parentMode: 'yoloBit',
            name: 'Robocon',
            blockIconURI: iconURL,
            allowBlockTypes: {
            },
            color1: '#cb2026',
            color2: '#cb2026',
            blocks: [
                {
                    opcode: 'robocon_follow_line_until',
                    rawCode: {
                        imports: 'from rover import *\nfrom robocon import *\n',
                        code:'follow_line_until(/*{SPEED}*/, lambda:(/*{LAMBDA}*/), /*{TIME}*/000)\n'
                    },
                    text: [
                        {
                            default: 'dò line với tốc độ [SPEED] cho đến khi [LAMBDA] trong [TIME] giây',
                            id: "gui.externalExtension.YoloBitRoboconExtension.robocon_follow_line_until"
                        }
                    ],
                    arguments: {
                        SPEED: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 30
                        },
                        LAMBDA: {
                            type: Scratch.ArgumentType.BOOLEAN
                        },
                        TIME: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 5
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'follow_line_in_time',
                    rawCode: {
                        imports: 'from rover import *\nfrom robocon import *\n',
                        code:'follow_line_until(/*{SPEED}*/, lambda: (False), /*{TIME_DELAY}*/000)\n'
                    },
                    text: [
                        {
                            default: 'dò line với tốc độ [SPEED] trong [TIME_DELAY] giây',
                            id: "gui.externalExtension.YoloBitRoboconExtension.follow_line_in_time"
                        }
                    ],
                    arguments: {
                        SPEED: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 30
                        },
                        TIME_DELAY: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 5
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'turn_until_condition',
                    rawCode: {
                        imports: 'from rover import *\nfrom robocon import *\n',
                        code:'turn_until_condition(/*{SPEED_LEFT}*/, /*{SPEED_RIGHT}*/, lambda: (/*{LAMBDA}*/), /*{TIME_DELAY}*/000)\n'
                    },
                    text: [
                        {
                            default: 'quay động cơ trái [SPEED_LEFT] phải [SPEED_RIGHT] đến khi [LAMBDA] tối đa [TIME_DELAY] giây',
                            id: "gui.externalExtension.YoloBitRoboconExtension.turn_until_condition"
                        }
                    ],
                    arguments: {
                        SPEED_LEFT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 50
                        },
                        SPEED_RIGHT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        TIME_DELAY: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        LAMBDA: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'turn_until_black_line',
                    rawCode: {
                        imports: 'from rover import *\nfrom robocon import *\n',
                        code:'turn_until_line_detected(/*{SPEED_LEFT}*/, /*{SPEED_RIGHT}*/, /*{TIME_DELAY}*/000)\n'
                    },
                    text: [
                        {
                            default: 'quay động cơ trái [SPEED_LEFT] phải [SPEED_RIGHT] đến khi gặp vạch đen tối đa [TIME_DELAY] giây',
                            id: "gui.externalExtension.YoloBitRoboconExtension.turn_until_black_line"
                        }
                    ],
                    arguments: {
                        SPEED_LEFT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 30
                        },
                        SPEED_RIGHT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        TIME_DELAY: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'open_gripper',
                    rawCode: {
                        function:'def moveGripper(moveToGripper, speed=80):\n'+
                        '    defaultGripper =90\n'
                        +'    sleep = translate(speed, 0, 100, 50, 0.1)\n'                
                        +'    if speed == 0:\n'
                        +'        return\n'                
                        +'    if moveToGripper < 0:\n'
                        +'        moveToGripper = 0\n'
                        +'    if moveToGripper > 90\n:'
                        +'        moveToGripper = 90\n'                
                        +'    if moveToGripper > 90:\n'
                        +'        for i in range(defaultGripper, moveToGripper):\n'
                        +'            rover.servo_write(i)\n'
                        +'            defaultGripper = moveToGripper\n'
                        +'            time.sleep_ms(int(sleep))\n'
                        +'    else:\n'
                        +'        for i in range(defaultGripper, moveToGripper, -1):\n'
                        +'            rover.servo_write(i)\n'
                        +'            defaultGripper = moveToGripper\n'
                        +'            time.sleep_ms(int(sleep))\n',
                        code:'moveGripper(/*{ACTION}*/, /*{SPEED}*/)\n'
                    },
                    text: [
                        {
                            default: '[ACTION] tay gắp tốc độ [SPEED]',
                            id: "gui.externalExtension.YoloBitRoboconExtension.open_gripper"
                        }
                    ],
                    arguments: {
                        SPEED: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 80
                        },
                        ACTION: {
                            menu: 'action'
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                }
                                              
            ],
            menus:{
                action:[
                    {
                        text: {
                            default: 'đóng',
                            id: 'gui.externalExtension.YoloBitRoboconExtension.close'
                        },
                        value: '0'
                    },
                    {
                        text: {
                            default:'mở',
                            id: 'gui.externalExtension.YoloBitRoboconExtension.open'
                        },
                        value: '90'
                    }
                ]
            }            
        };
    }
}

Scratch.extensions.register(new Scratch3YoloBitRobocon());