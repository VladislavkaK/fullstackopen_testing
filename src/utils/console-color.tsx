import { useState } from 'react';

function useColorMode () {
    const console = window.console;
    let options: any = options || {};
    let opts = {
        enabled: typeof options.enabled !== 'undefined' ? options.enabled : true,
        color: typeof options.color !== 'undefined' ? options.color : '#bada55',
        background: typeof options.background !== 'undefined' ? options.background : '#111'
    };
    let colorTypes = 'dir|dirxml|error|info|log|warn';
    let streams = [], logs = [];

    const onStreams = (name, dataColor) => {
        if (name !== undefined) {
            opts.enabled = true;
        }

        if (dataColor !== null) {
            opts.color = dataColor.color;
            opts.background = dataColor.background;
        }
    }

    const log = (args, type) => {
        let color;
        streams = [args.value];

        if (opts.enabled) {
            if (args.title !== undefined && colorTypes.indexOf(type) !== -1) {
                color = type !== 'dir' ? '%c' : '';

                streams.unshift(color + args.title + ' ', 'color:' + opts.color + '; background:' + opts.background + '; font-weight:bold');
                console[type].apply(console, streams);
                streams.splice(0, 1);
            }
        } else {
            console[type].apply(console, streams);
        }
    }

    const stream = (title, value, type, dataColor) => {
        let strm = {...streams, title, value, dataColor};
   
        onStreams(title, dataColor);

        return log(strm, type);
    }

    return {
        stream: stream
    }
}

export default useColorMode;