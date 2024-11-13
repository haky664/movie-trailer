// @flow
import {useState, useEffect} from 'react';
import YouTube from "react-youtube";
import Modal from "react-modal";

const customStyles = {
    overplay: {
        position: 'fixed',
        zIndex: 1,
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};

export function ModelYouTube({modalIsOpen, setModalIsOpen, trailerID}) {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={customStyles}
            contentLabel="Example Modal">
            <YouTube videoId={trailerID} opts={opts}/>;
        </Modal>
    );
};