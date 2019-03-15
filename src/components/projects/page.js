import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../appBar';
import './style.css';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ServerInstance from '../server'
import Avatar from '@material-ui/core/Avatar';

function Page(props) {
    const {
        goTo,
        currentItem,
    } = props;

    const Step = (props) =>
        <div className="Stepper__step">
            <div className="Stepper__indicator">
                <span className="Stepper__info">{props.indicator}</span>
            </div>
            <div className="Stepper__label">{props.title}</div>
            <div className="Stepper__panel">
                {props.children}
            </div>
        </div>;

    const Stepper = (props) =>
        <div className={`Stepper ${props.isVertical ? 'Stepper--vertical' : ''} ${props.isInline ? 'Stepper--inline' : ''}`}>
            {props.children}
        </div>;

    return (
        <Fragment>
            <CssBaseline />

            <AppBar />

            <div className="details-page">
                <div className="header">
                    <Fragment>
                    <Avatar alt="Remy Sharp" className="image" src={currentItem.image}/>
                        <Typography gutterBottom variant="h5" component="h2" className="content">
                            {currentItem.title}
                        </Typography>
                    </Fragment>
                </div>
                <Divider></Divider>
                <div>
                    <Stepper isInline>
                        <Step indicator="1" title="Server-Instance">
                            <div className="Content">
                                <button>Prev</button>
                                <button>Next</button>
                            </div>
                        </Step>
                        <Step indicator="2" title="Projects">
                            <div className="Content">
                                <button>Prev</button>
                                <button>Next</button>
                            </div>
                        </Step>
                        <Step indicator="3" title="Roles / Groups">
                            <div className="Content">
                                <button>Prev</button>
                                <button>Next</button>
                            </div>
                        </Step>
                    </Stepper>
                </div>
                <Divider/>
                <ServerInstance></ServerInstance>
                
                <Button
                    color="primary"
                    onClick={() => goTo('/results')}
                >
                    Back
                    </Button>
            </div>
        </Fragment>
    );
}

export default Page;
