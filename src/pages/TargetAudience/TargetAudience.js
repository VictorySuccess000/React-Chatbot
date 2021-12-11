import React, { useState } from "react";
import { Button } from "rebass";
import BotMessageBox from "../../components/BotMessageBox/BotMessageBox";
import BotStepper from "../../components/BotStepper/BotStepper";
import ChatBuilderCard from "../../components/ChatBuilderCard/ChatBuilderCard";

import NotificationBox from "../../components/NotificationBox";
import { FlexLayout, Text, Input } from "../../components/styles";
import download from "../../assets/img/svgs/download.svg";
import calender from "../../assets/img/svgs/calender.svg";

import FreeTextAnswer from "../../components/FreeTextAnswer/FreeTextAnswer";
import { } from "./style";
export default function TargetAudience11() {
    const [activeAnswerType, setActiveAnswerType] = useState("addmanually");
    const [checkboxvalue, setCheckbox] = useState(true);
    return (
        <>
            <div
                className=""
                style={{
                    display: "flex",
                    margin: "1rem auto",
                    justifyContent: "space-between",
                    maxWidth: "870px",
                    width: "100%",
                }}
            >
                <BotStepper
                    isCompleted={true}
                    title="Bot Builder"
                    number={1}
                />
                <BotStepper isCompleted={true} title="Bot Simulator" number={2} />
                <BotStepper isCompleted={true} title="Target audience" number={3} />
                <BotStepper
                    isCompleted={false}
                    title="Connect WhatsApp Account"
                    number={4}
                />
                <BotStepper isCompleted={false} title="Run" number={5} />
                <BotStepper isCompleted={false} title="Metrics" number={6}></BotStepper>
            </div>
            <NotificationBox />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <FlexLayout
                    height="35.38px"
                    backgroundColor="#202945"
                    borderRadius="9px 9px 0 0"
                    justify="flex-start"
                    overflow="hidden"
                    minWidth="870px"
                >
                    <Text color="white" margin="0 0 0 20px" style={{
                        font: "normal normal medium 16px/19px Roboto",
                        letterSpacing: "0px",
                        color: "#F4F6FD",
                    }}>
                        Bot Name
                    </Text>
                </FlexLayout>
                <div
                    style={{
                        height: "461.45px",
                        border: " 1px solid #8f9bb9",
                        minWidth: "870px",
                        borderRadius: "0px 0px 9px 9px",
                    }}
                >
                    <div
                        style={{
                            height: "160px",
                            width: "836px",
                            top: "267px",
                            left: "405px",
                            marginTop: "10.69px",
                            marginLeft: "17px",
                        }}
                    >
                        <div
                            style={{
                                width: "836.14px",
                                height: "132px",
                                top: "295px",
                                left: "405px",
                            }}
                        >
                            <Text style={{
                                font: "normal normal medium 16px/19px Roboto",
                                letterSpacing: "0px",
                                color: "#202945",
                                }}
                            >1.Target Audience Details</Text>
                            <div
                                style={{
                                    marginTop: "8.88px",
                                    top: "295px",
                                    left: "405px",
                                    width: "835.82px",
                                    height: "132px",
                                }}
                            >
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <div
                                        style={{
                                            top: "295px",
                                            left: "405px",
                                            width: "419px",
                                            height: "29px",
                                            border: "1px solid #8F9BB9",
                                            borderRadius: "9px 0px 0px 0px",
                                            cursor: "pointer",
                                            opacity: 1,
                                            background:
                                                activeAnswerType === "uploadfile" ? "#BDBAD4" : "white",
                                        }}

                                        onClick={() => {
                                            setActiveAnswerType("uploadfile")
                                        }}
                                    >
                                        <div
                                            style={{
                                                top: "303px",
                                                left: "558px",
                                                width: "113px",
                                                height: "14px",
                                                font: "normal normal medium 12px/14px Roboto",
                                                fontSize: "12px",
                                                letterSpacing: "0px",
                                                color: "#202945",
                                                opacity: 1,   
                                                marginLeft: "153px",
                                                marginTop: "5px",
                                                color:
                                                    activeAnswerType === "uploadfile" ? "white" : "black",
                                            }}
                                        >Upload List From File</div>
                                    </div>
                                    <div
                                        style={{
                                            border: "1px solid #8F9BB9",
                                            borderRadius: "0px 9px 0px 0px",
                                            opacity: 1,
                                            top: "295px",
                                            left: "822px",
                                            width: "419px",
                                            cursor: "pointer",
                                            height: "29px",
                                            background:
                                                activeAnswerType === "addmanually" ? "#BDBAD4" : "white",
                                            
                                        }}

                                        onClick={() => {
                                            setActiveAnswerType("addmanually")
                                        }}
                                    >
                                        <div
                                            style={{
                                                font: "normal normal medium 12px/14px Roboto",
                                                letterSpacing: "0px",
                                                color: "#FFFFFF",
                                                opacity: 1,
                                                top: "302px",
                                                left: "995px",
                                                width: "73px",
                                                height: "14px",
                                                marginTop: "5px",
                                                marginLeft: "173px",
                                                fontSize: "12px",
                                                color:
                                                    activeAnswerType === "addmanually" ? "white" : "black",
                                            }}
                                            
                                        >Add Manually</div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        height: "103px",
                                        border: " 1px solid #8f9bb9",
                                        minWidth: "836px",
                                        borderRadius: "0px 0px 9px 9px",
                                    }}
                                >
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        {activeAnswerType === "addmanually" ? (
                                            <>
                                                <div
                                            style={{
                                                top: "335px",
                                                left: "420px",
                                                width: "751px",
                                                height: "54px",
                                                marginLeft: "15px"
                                            }}
                                        >
                                            <div style={{display:"flex", flexDirection:"row"}}>
                                                <div
                                                    style={{
                                                        top: "335px",
                                                        left: "420px",
                                                        width: "170px",
                                                        height: "54px",
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            top: "335px",
                                                            left: "420px",
                                                            width: "80px",
                                                            height: "14px",
                                                            font: "normal normal medium 12px/14px Roboto",
                                                            letterSpacing: "0px",
                                                            color: "#043450",
                                                            fontSize: "12px"
                                                        }}
                                                    >Phone Number</Text>
                                                    <Text style={{
                                                        font: "normal normal normal 12px/14px Roboto",
                                                        letterSpacing: "0px",
                                                        color: "#F50057",
                                                        top: "334px",
                                                        left: "503px",
                                                        width: "5px",
                                                        height: "14px",
                                                        fontSize: "12px"
                                                    }}
                                                    >*</Text>
                                                    <div 
                                                        style={{
                                                            border: "1px solid #BAC2C7",
                                                            borderRadius: "7px",
                                                            opacity: 1,
                                                            top: "354px",
                                                            left: "420px",
                                                            width: "170px",
                                                            height: "35px",
                                                            marginTop: "5px",
                                                            display: "flex",
                                                            flexDirection: "row"
                                                        }}
                                                    >
                                                        <Input
                                                            placeholder= "+91 12453 48268"
                                                            style={{
                                                            textAlign: "left",
                                                            font: "normal normal normal 10px/13px Roboto",
                                                            letterSpacing: "0px",
                                                            color: "#202945",
                                                            top: "365px",
                                                            left: "430px",
                                                            width: "149px",
                                                            height: "13px",
                                                            marginTop: "11px",
                                                            marginLeft: "10px",
                                                        }}></Input>
                                                        <div style={{top: "365px",
                                                            left: "430px",
                                                            width: "21px",
                                                            height: "13px",
                                                            marginTop: "11px",
                                                        }}>
                                                            <i className="fa fa-info-circle" style={{
                                                                top: "365px",
                                                                left: "570px",
                                                                width: "12px",
                                                                height: "12px",
                                                            }}></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        top: "335px",
                                                        left: "605px",
                                                        width: "170px",
                                                        height: "54px",
                                                        marginLeft: "15px"
                                                    }}
                                                >
                                                    <Text style={{
                                                        font: "normal normal medium 12px/14px Roboto",
                                                        letterSpacing: "0px",
                                                        color: "#043450",
                                                        top: "335px",
                                                        left: "605px",
                                                        width: "59px",
                                                        height: "14px",
                                                        fontSize: "12px"
                                                    }}>First Name</Text>
                                                    <div style={{
                                                        border: "1px solid #BAC2C7",
                                                        borderRadius: "7px",
                                                        top: "354px",
                                                        left: "605px",
                                                        width: "170px",
                                                        height: "35px",
                                                        marginTop: "5px",
                                                        display: "flex",
                                                        flexDirection: "row"
                                                    }}>
                                                        <Input  placeholder= "Amit"
                                                            style={{
                                                            textAlign: "left",
                                                            font: "normal normal normal 10px/13px Roboto",
                                                            letterSpacing: "0px",
                                                            color: "#202945",
                                                            top: "365px",
                                                            left: "615px",
                                                            width: "149px",
                                                            height: "13px",
                                                            marginTop: "11px",
                                                            marginLeft: "10px",
                                                            }} />
                                                        <div style={{
                                                            top: "365px",
                                                            left: "430px",
                                                            width: "21px",
                                                            height: "13px",
                                                            marginTop: "11px",
                                                        }}>
                                                            <i className="fa fa-info-circle" style={{
                                                                top: "365px",
                                                                left: "570px",
                                                                width: "12px",
                                                                height: "12px",
                                                            }}></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        top: "335px",
                                                        left: "790px",
                                                        width: "170px",
                                                        height: "54px",
                                                        marginLeft: "15px"
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            font: "normal normal medium 12px / 14px Roboto",
                                                            letterSpacing: "0px",
                                                            color: "#043450",
                                                            fontSize: "12px"
                                                        }}>
                                                        Last Name
                                                    </Text>
                                                    <div
                                                        style={{
                                                            border: "1px solid #BAC2C7",
                                                            borderRadius: "7px",
                                                            opacity: 1,
                                                            top: "354px",
                                                            left: "790px",
                                                            width: "170px",
                                                            height: "35px",
                                                            marginTop: "5px",
                                                            display: "flex",
                                                            flexDirection: "row"
                                                        }}
                                                    >
                                                        <Input  placeholder= "Goyani"
                                                            style={{
                                                            textAlign: "left",
                                                            font: "normal normal normal 10px/13px Roboto",
                                                            letterSpacing: "0px",
                                                            color: "#202945",
                                                            top: "365px",
                                                            left: "615px",
                                                            width: "149px",
                                                            height: "13px",
                                                            marginTop: "11px",
                                                            marginLeft: "10px",
                                                            }} />
                                                        <div style={{
                                                            top: "365px",
                                                            left: "430px",
                                                            width: "21px",
                                                            height: "13px",
                                                            marginTop: "11px",
                                                        }}>
                                                            <i className="fa fa-info-circle" style={{
                                                                top: "365px",
                                                                left: "570px",
                                                                width: "12px",
                                                                height: "12px",
                                                            }}></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{
                                                    top: "335px",
                                                    left: "975px",
                                                    width: "170px",
                                                    height: "54px",
                                                    marginLeft: "15px"
                                                }}>
                                                    <Text style={{
                                                        font: "normal normal medium 12px/14px Roboto",
                                                        letterSpacing: "0px",
                                                        color: "#043450",
                                                        fontSize: "12px"
                                                    }}>Email Address</Text>
                                                    <div style={{
                                                        border: "1px solid #BAC2C7",
                                                        borderRadius: "7px",
                                                        marginTop: "5px",
                                                        top: "354px",
                                                        left: "975px",
                                                        width: "170px",
                                                        height: "35px",
                                                        display: "flex",
                                                        flexDirection: "row"
                                                    }}>
                                                        <Input  placeholder= "loem@gmail.com"
                                                            style={{
                                                            textAlign: "left",
                                                            font: "normal normal normal 10px/13px Roboto",
                                                            letterSpacing: "0px",
                                                            color: "#202945",
                                                            top: "365px",
                                                            left: "615px",
                                                            width: "149px",
                                                            height: "13px",
                                                            marginTop: "11px",
                                                            marginLeft: "10px",
                                                            }} />
                                                        <div style={{
                                                            top: "365px",
                                                            left: "430px",
                                                            width: "21px",
                                                            height: "13px",
                                                            marginTop: "11px",
                                                        }}>
                                                            <i className="fa fa-info-circle" style={{
                                                                top: "365px",
                                                                left: "570px",
                                                                width: "12px",
                                                                height: "12px",
                                                            }}></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "row"}}>
                                            <div style={{
                                                    background: "#043450",
                                                    borderRadius: "6px 0px 0px 6px",
                                                    top: "355px",
                                                    left: "1159px",
                                                    width: "33px",
                                                    height: "33px",
                                                    cursor: "pointer",
                                                    opacity: 1,
                                                    marginTop: "31.32px",
                                                }}
                                                    ><i className="fa fa-plus" style={{
                                                        top: "367px",
                                                        left: "1171px",
                                                        width: "9px",
                                                        color:"white",
                                                        height: "9px",
                                                        marginTop: "12px",
                                                        marginLeft: "16.5px"
                                                    }}></i>
                                            </div>
                                            <div style={{
                                                background: "#F50057",
                                                borderRadius: "0px 6px 6px 0px",
                                                top: "355px",
                                                left: "1192px",
                                                width: "33px",
                                                height: "33px",
                                                marginTop: "31.32px",
                                                marginRight: "15.91px",
                                                cursor: "pointer",
                                                    }}>
                                                        <i className="fa fa-trash-alt" style={{
                                                            top: "365px",
                                                            left: "1204px",
                                                            width: "9px",
                                                            height: "12px",
                                                            marginTop: "10px",
                                                            marginLeft: "12.22px",
                                                            color: "white"
                                                        }}></i>
                                            </div>
                                        </div>
                                          </>      
                                        ): (
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                                <img
                                                    style={{
                                                        top: "338px",
                                                        left: "806px",
                                                        width: "36px",
                                                        height: "31px",
                                                        marginTop: "10.5px",
                                                        marginLeft: "400px"
                                                    }}
                                                    src={download} alt="" />
                                                <div style={{
                                                    font: "normal normal normal 12px/14px Roboto",
                                                    letterSpacing: "0px",
                                                    color: "#BAC2C7",
                                                    marginTop: "9.07px",
                                                    marginLeft: "364px",
                                                    top: "378px",
                                                    left: "769px",
                                                    width: "109px",
                                                    height: "14px"
                                                }}>Attch file form here</div>
                                            </div>
                                        )}
                                        
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <div style={{
                                            background: "#F4F6FD 0% 0% no-repeat padding-box",
                                            borderRadius: "0px 0px 0px 8px",
                                            top: "403px",
                                            left: "406px",
                                            width: "653.14px",
                                            height: "21.8px",
                                            marginTop:"15.07px"
                                        }}></div>
                                         <div style={{
                                            background: "#202945 0% 0% no-repeat padding-box",
                                            top: "404px",
                                            left: "1058px",
                                            width: "96px",
                                            height: "22px",
                                            marginTop: "15.07px"
                                        }}>
                                            <div style={{
                                                font: "normal normal normal 9px/11px Roboto",
                                                letterSpacing: "0px",
                                                color: "#FFFFFF",
                                                top: "408px",
                                                left: "1092px",
                                                height: "11px",
                                                marginTop: "6px",
                                                marginLeft: "34px"
                                            }}>Upload</div>
                                        </div>
                                        <div style={{
                                            background: "#00A1FF 0% 0% no-repeat padding-box",
                                            borderRadius: "0px 0px 7px 0px",
                                            top: "404px",
                                            left: "1153px",
                                            width: "88px",
                                            height: "22px",
                                            marginTop: "15.07px"
                                        }}>
                                            <div style={{
                                                font: "normal normal normal 9px/11px Roboto",
                                                letterSpacing: "0px",
                                                color: "#FFFFFF",
                                                top: "408px",
                                                left: "1180px",
                                                height: "11px",
                                                marginTop: "6px",
                                                marginLeft: "27px"
                                            }}>Clear All</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            marginTop: "12.08px",
                            width: "836px",
                            height: "261px",
                            top: "438px",
                            left: "405px",
                            marginLeft: "17px",
                            marginTop: "11.08px"
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{
                                font: "normal normal medium 16px/19px Roboto",
                                letterSpacing: "0px",
                                color: "#202945",
                                opacity: 1,
                                top: "438px",
                                left: "405px",
                                width: "171px",
                                height: "19px",
                                }}
                            >2.Send Opt-in Message</Text>
                            <div
                                style={{
                                    background: "#F50057",
                                    borderRadius: "16px",
                                    opacity: 1,
                                    top: "438px",
                                    left: "590px",
                                    width: "34px",
                                    height: "16px",
                                    marginLeft: "13.68px",
                                    marginTop: "5px",
                                    cursor: "pointer",
                                    display: "flex",
                                    background:
                                        checkboxvalue === true ? "#F50057" : "#8F9BB9",
                                }}

                                onClick={() => {
                                        setCheckbox(!checkboxvalue)
                                    }}
                            >
                                <div style={{
                                        background: "#FFFFFF",
                                        opacity: 1,
                                        top: "443px",
                                        left:
                                            checkboxvalue === true ? "608px" : "587px",
                                        width: "13px",
                                        height: "13px",
                                        borderRadius: "50%",
                                        marginLeft:
                                            checkboxvalue === true ? "18.62px" : "1.62px",
                                        marginTop: "1.62px",
                                        
                                    }}
                                    
                                ></div>
                            </div>
                            {checkboxvalue === true ? (
                                <>
                                    <Text style={{
                                            font: "normal normal medium 12px/14px Roboto",
                                            letterSpacing: "0px",
                                            color: "#F50057",
                                            opacity: 1,
                                            marginLeft: "13.23px",
                                            fontSize: "12px",
                                            top: "442px",
                                            left: "637px",
                                            height: "14px",
                                        }}>Following Message Displayed to the User</Text>
                                </>) : (
                                <>
                                    <div style={{
                                            font: "normal normal medium 12px/14px Roboto",
                                            letterSpacing: "0px",
                                            fontSize: "12px",
                                            color: "#202945",
                                            top: "436px",
                                            left: "829px",
                                            // width: "166px",
                                            fontWeight: "bold",
                                            marginTop: "1px",
                                            marginLeft: "207.41px",
                                        }}
                                    >
                                    Message Displayed to the User
                                    </div>
                                </>)}
                            
                        </div>
                        {checkboxvalue === true ? (
                            <>
                               <div style={{
                                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                                    border: "1px solid #8F9BB9",
                                    borderRadius: "10px",
                                    opacity: 1,
                                    top: "467px",
                                    left: "411px",
                                    width: "836px",
                                    height: "89px",
                                    marginTop: "9.88px",
                                    flexDirection: "column",
                                    display: "flex",
                                }}>
                                    <span
                                        gap="4px"
                                        style={{
                                            font: "normal normal normal 12px/14px Roboto",
                                            letterSpacing: "0px",
                                            color: "#BAC2C7",
                                            top: "478px",
                                            left: "425px",
                                            width: "100%",
                                            height: "14px",
                                            marginTop: "10.85px",
                                            marginLeft: "14.47px"
                                        }}
                                    >Do you want to participate?</span>
                                    <span
                                        style={{
                                            font: "normal normal normal 12px/14px Roboto",
                                            letterSpacing: "0px",
                                            color: "#BAC2C7",
                                            top: "496px",
                                            left: "425px",
                                            width: "100%",
                                            height: "14px",
                                            marginLeft: "14.47px",
                                            marginTop: "4px"
                                        }}
                                    >Send :</span>
                                    <span
                                        style={{
                                            font: "normal normal normal 12px/14px Roboto",
                                            letterSpacing: "0px",
                                            color: "#BAC2C7",
                                            top: "514px",
                                            left: "425px",
                                            width: "100%",
                                            height: "14px",
                                            marginLeft: "14.47px",
                                            marginTop: "4px"
                                        }}
                                    >1.Agree</span>
                                    <span
                                        style={{
                                            font: "normal normal normal 12px/14px Roboto",
                                            letterSpacing: "0px",
                                            color: "#BAC2C7",
                                            top: "532px",
                                            left: "425px",
                                            width: "100%",
                                            height: "14px",
                                            marginLeft: "14.47px",
                                            marginTop: "4px"
                                        }}
                                    >2.Disagree</span>
                                </div> 
                            </>) : (
                                <>
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <div style={{background: "#FFFFFF",
                                            border: "1px solid #8F9BB9",
                                            borderRadius: "10px",
                                            top: "460px",
                                            left: "405px",
                                            width: "412px",
                                            height: "89px",
                                            marginTop: "9.88px"
                                        }}>
                                            <div style={{
                                                top: "460px",
                                                left: "405px",
                                                width: "412px",
                                                height: "66px",
                                            }}></div>
                                            <div style={{display: "flex", flexDirection: "row"}}>
                                                <div style={{
                                                    background: "#202945",
                                                    borderRadius: "0px 0px 0px 9px",
                                                    top: "526px",
                                                    left: "406px",
                                                    width: "205px",
                                                    height: "23px",
                                                }}>
                                                    <div style={{
                                                        font: "normal normal normal 9px/11px Roboto",
                                                        letterSpacing: "0px",
                                                        color: "#FFFFFF",
                                                        top: "532px",
                                                        left: "497px",
                                                        width: "23px",
                                                        height: "11px",
                                                        marginTop: "6px",
                                                        marginLeft: "91px"
                                                    }}
                                                    >Agree</div>
                                                </div>
                                                <div style={{
                                                    background: "#00A1FF 0% 0% no-repeat padding-box",
                                                    borderRadius: "0px 0px 9px 0px",
                                                    top: "526px",
                                                    left: "696px",
                                                    width: "205px",
                                                    height: "23px",
                                                }}>
                                                    <div style={{
                                                        font: "normal normal normal 9px/11px Roboto",
                                                        letterSpacing: "0px",
                                                        color: "#FFFFFF",
                                                        top: "532px",
                                                        left: "497px",
                                                        width: "23px",
                                                        height: "11px",
                                                        marginTop: "6px",
                                                        marginLeft: "91px"
                                                    }}
                                                    >Disagree</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                background: "#FFFFFF",
                                                border: "1px solid #8f9bb9",
                                                borderRadius: "10px",
                                                top: "460px",
                                                left: "829px",
                                                width: "412px",
                                                height: "89px",
                                                marginLeft: "12px",
                                                marginTop: "9.88px"
                                            }}
                                        >
                                        
                                        </div>
                                    </div>
                                </>)}
                        
                        <div style={{
                                top: "567px",
                                left: "405px",
                                width: "836px",
                                height: "132px",
                                marginTop: "11px"
                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <Text style={{
                                    top: "567px",
                                    left: "405px",
                                    width: "134px",
                                    height: "19px",
                                    font: "normal normal medium 16px/19px Roboto",
                                    letterSpacing: "0px",
                                    color: "#202945",
                                }}>3.Offline Message</Text>
                                <div style={{
                                    top: "570px",
                                    left: "554px",
                                    width: "34px",
                                    height: "16px",
                                    background: "#8F9BB9 0% 0% no-repeat padding-box",
                                    borderRadius: "16px",
                                    marginLeft: "15px",
                                    marginTop: "5px"
                                }}>
                                    <div style={{
                                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                                        top: "572px",
                                        left: "556px",
                                        width: "13px",
                                        height: "13px",
                                        marginTop: "1.62px",
                                        marginLeft: "1.62px",
                                        borderRadius: "50%"
                                    }}></div>
                                </div>
                            </div>
                            <div style={{
                                background: "#FFFFFF 0% 0% no-repeat padding-box",
                                border: "1px solid #8F9BB9", 
                                opacity: 1,
                                top: "595px",
                                left: "405px",
                                width: "836px",
                                height: "104px",
                                marginTop: "9px",
                                borderRadius: "7px",
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <div style={{
                                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                                    top: "610px",
                                    left: "418px",
                                    width: "264px",
                                    height: "72px",
                                    paddingLeft: "12.59px",
                                    marginTop: "5px"
                                }}>
                                    <BotMessageBox b2text="..."></BotMessageBox>
                                </div>
                                <div style={{
                                    top: "610px",
                                    left: "697px",
                                    width: "212px",
                                    height: "73px",
                                    marginTop: "15px",
                                    marginLeft: "14.91px",
                                    display: "flex",
                                    flexDirection: "row"
                                }}>
                                    <div style={{display: "flex", flexDirection: "column"}}>
                                        <Text style={{
                                            font: "normal normal medium 12px/14px Roboto",
                                            letterSpacing: "0px",
                                            color: "#043450",
                                            top: "610px",
                                            left: "697px",
                                            // width: "55px",
                                            height: "14px",
                                            fontSize: "12px",
                                            textAlign: "left"
                                        }}>From Data</Text>
                                        <div style={{
                                            background: "#FFFFFF 0% 0% no-repeat padding-box",
                                            border: "1px solid #8F9BB9",
                                            borderRadius: "7px",
                                            top: "633px",
                                            left: "697px",
                                            width: "101px",
                                            height: "50px",
                                            marginTop: "9px",
                                            display: "flex",
                                            flexDirection: "row"
                                        }}>
                                            <div style={{
                                                font: "normal normal normal 10px/13px Roboto",
                                                letterSpacing: "0px",
                                                color: "#BAC2C7",
                                                top: "652px",
                                                left: "707px",
                                                width: "71px",
                                                height: "13px",
                                                marginTop: "18.55px",
                                                marginLeft: "10.09px"
                                            }}>14-05-2021</div>
                                            <div style={{
                                                background: "#F50057 0% 0% no-repeat padding-box",
                                                borderRadius: "0px 6px 6px 0px",
                                                top: "634px",
                                                left: "767px",
                                                width: "30px",
                                                height: "48px",
                                            }}>
                                                <img src={calender} alt="" style={{
                                                    top: "650px",
                                                    left: "775px",
                                                    width: "15px",
                                                    height: "17px",
                                                    marginTop: "15.66px",
                                                    marginLeft: "6.26px"
                                                }}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "10.09px" }}>
                                        <Text style={{
                                            font: "normal normal medium 12px/14px Roboto",
                                            letterSpacing: "0px",
                                            color: "#043450",
                                            top: "610px",
                                            left: "808px",
                                            height: "14px",
                                            fontSize: "12px",
                                            textAlign: "left"
                                        }}>To Data</Text>
                                        <div style={{
                                            background: "#FFFFFF 0% 0% no-repeat padding-box",
                                            border: "1px solid #8F9BB9",
                                            borderRadius: "7px",
                                            top: "633px",
                                            left: "808px",
                                            width: "101px",
                                            height: "50px",
                                            marginTop: "9px",
                                            display: "flex",
                                            flexDirection: "row"
                                        }}>
                                            <div style={{
                                                font: "normal normal normal 10px/13px Roboto",
                                                letterSpacing: "0px",
                                                color: "#BAC2C7",
                                                top: "652px",
                                                left: "823px",
                                                width: "71px",
                                                height: "13px",
                                                marginTop: "18.55px",
                                                marginLeft: "10.09px"
                                            }}>14-05-2021</div>
                                            <div style={{
                                                background: "#F50057 0% 0% no-repeat padding-box",
                                                borderRadius: "0px 6px 6px 0px",
                                                top: "634px",
                                                left: "878px",
                                                width: "30px",
                                                height: "48px",
                                            }}>
                                                <img src={calender} alt="" style={{
                                                    top: "650px",
                                                    left: "886px",
                                                    width: "15px",
                                                    height: "17px",
                                                    marginTop: "15.66px",
                                                    marginLeft: "6.26px"
                                                }}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    top: "610px",
                                    left: "920px",
                                    width: "101px",
                                    height: "73px",
                                    marginTop: "15px",
                                    marginLeft: "10.82px",
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <Text style={{
                                        font: "normal normal medium 12px/14px Roboto",
                                        letterSpacing: "0px",
                                        color: "#043450",
                                        top: "610px",
                                        left: "920px",
                                        width: "58px",
                                        height: "14px",
                                        fontSize: "12px"
                                    }}>From Time</Text>
                                    <div style={{
                                        background: "#FFFFFF",
                                        border: "1px solid #8F9BB9",
                                        borderRadius: "7px",
                                        top: "633px",
                                        left: "920px",
                                        width: "101px",
                                        height: "50px",
                                        marginTop: "9.39px",
                                        display: "flex",
                                        flexDirection: "row"
                                    }}>
                                        <div style={{
                                            top: "633px",
                                            left: "920px",
                                            width: "48px",
                                            height: "50px",
                                        }}>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column"}}>
                                            <div>
                                                <div style={{
                                                    background: "#F4F6FD",
                                                    borderBottom: "1px solid #8F9BB9",
                                                    top: "634px",
                                                    left: "965px",
                                                    width: "33px",
                                                    height: "24px",
                                                }}>
                                                    <Text
                                                        style={{
                                                            font: "normal normal medium 10px / 13px Roboto",
                                                            letterSpacing: "0px",
                                                            color: "#8F9BB9",
                                                            fontSize: "10px",   
                                                            top: "640px",
                                                            left: "974px",
                                                            width: "15px",
                                                            height: "13px",
                                                            marginTop: "5.6px",
                                                            marginLeft: "9px"
                                                        }}
                                                    >AM</Text>
                                                </div>
                                            </div>
                                            <div>
                                                <div style={{
                                                    background: "#F4F6FD",
                                                    top: "658px",
                                                    left: "965px",
                                                    width: "33px",
                                                    height: "24px",
                                                }}>
                                                    <Text
                                                        style={{
                                                            font: "normal normal medium 10px / 13px Roboto",
                                                            letterSpacing: "0px",
                                                            color: "#8F9BB9",
                                                            fontSize: "10px",   
                                                            top: "664px",
                                                            left: "974px",
                                                            width: "15px",
                                                            height: "13px",
                                                            marginTop: "5.6px",
                                                            marginLeft: "9px"
                                                        }}
                                                    >PM</Text>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <div
                                                style={{
                                                    background: "#F50057 0% 0% no-repeat padding-box",
                                                    borderRadius: "0px 6px 0px 0px",
                                                    top: "634px",
                                                    left: "998px",
                                                    width: "22px",
                                                    height: "24px",
                                                }}
                                            ></div>
                                            <div
                                                style={{
                                                    background: "#202945 0% 0% no-repeat padding-box",
                                                    borderRadius: "0px 0px 6px 0px",
                                                    top: "658px",
                                                    left: "998px",
                                                    width: "22px",
                                                    height: "25px",
                                                }}
                                            >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    top: "610px",
                                    left: "1031px",
                                    width: "101px",
                                    height: "73px",
                                    marginTop: "15px",
                                    marginLeft: "10.18px",
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <Text style={{
                                        font: "normal normal medium 12px/14px Roboto",
                                        letterSpacing: "0px",
                                        color: "#043450",
                                        fontSize: "12px",
                                        top: "610px",
                                        left: "1031px",
                                        height: "14px",
                                        textAlign: "left"
                                    }}>To Time</Text>
                                    <div style={{
                                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                                        border: "1px solid #8F9BB9",
                                        borderRadius: "7px",
                                        top: "633px",
                                        left: "1031px",
                                        width: "101px",
                                        height: "50px",
                                        marginTop: "9.39px",
                                        display: "flex",
                                        flexDirection: "row"
                                    }}>
                                        <div style={{
                                            top: "633px",
                                            left: "1031px",
                                            width: "48px",
                                            height: "50px",
                                        }}>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column"}}>
                                            <div>
                                                <div style={{
                                                    background: "#F4F6FD",
                                                    borderBottom: "1px solid #8F9BB9",
                                                    top: "634px",
                                                    left: "1076px",
                                                    width: "33px",
                                                    height: "24px",
                                                }}>
                                                    <Text
                                                        style={{
                                                            font: "normal normal medium 10px / 13px Roboto",
                                                            letterSpacing: "0px",
                                                            color: "#8F9BB9",
                                                            fontSize: "10px",   
                                                            top: "640px",
                                                            left: "1085px",
                                                            width: "15px",
                                                            height: "13px",
                                                            marginTop: "5.6px",
                                                            marginLeft: "9px"
                                                        }}
                                                    >AM</Text>
                                                </div>
                                            </div>
                                            <div>
                                                <div style={{
                                                    background: "#F4F6FD",
                                                    top: "658px",
                                                    left: "1076px",
                                                    width: "33px",
                                                    height: "24px",
                                                }}>
                                                    <Text
                                                        style={{
                                                            font: "normal normal medium 10px / 13px Roboto",
                                                            letterSpacing: "0px",
                                                            color: "#8F9BB9",
                                                            fontSize: "10px",   
                                                            top: "664px",
                                                            left: "1085px",
                                                            width: "15px",
                                                            height: "13px",
                                                            marginTop: "5.6px",
                                                            marginLeft: "9px"
                                                        }}
                                                    >PM</Text>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <div
                                                style={{
                                                    background: "#F50057 0% 0% no-repeat padding-box",
                                                    borderRadius: "0px 6px 0px 0px",
                                                    top: "634px",
                                                    left: "1109px",
                                                    width: "22px",
                                                    height: "24px",
                                                }}
                                            ></div>
                                            <div
                                                style={{
                                                    background: "#202945 0% 0% no-repeat padding-box",
                                                    borderRadius: "0px 0px 6px 0px",
                                                    top: "658px",
                                                    left: "1109px",
                                                    width: "22px",
                                                    height: "25px",
                                                }}
                                            >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
