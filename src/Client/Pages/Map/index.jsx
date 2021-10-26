import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const ReactAppWhatsapp = () => {
    return (
        <WhatsAppWidget
            phoneNo="+25762243766"
            position="right"
            widgetWidth="300px"
            widgetWidthMobile="260px"
            autoOpen={false}
            autoOpenTimer={5000}
            messageBox={true}
            messageBoxTxt="Salut l'équipe JimTag"
            iconSize="40"
            iconColor="white"
            iconBgColor="#5ce1e6"
            headerIcon="/logowhatsapp.png"
            headerIconColor="pink"
            headerTxtColor="black"
            headerBgColor="#5ce1e6"
            headerTitle="JimTag"
            headerCaption="en ligne"
            bodyBgColor="#bbb"
            chatPersonName="JimTag"
            chatMessage={<>Salut  👋 <br /><br /> Comment puis-je t'aider?</>}
            footerBgColor="#000"
            btnBgColor="#5ce1e6"
            btnTxtColor="black"
        />
    );
};

export default ReactAppWhatsapp;