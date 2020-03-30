import * as React from 'react';

export interface HelloProps {
    compiler: string;
    framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export const HelloWorld: React.FC<HelloProps> = ({ compiler, framework }: HelloProps) => {
    const [message, setMessage] = React.useState(null);

    React.useEffect(() => {
        const fetchItens = async (): Promise<void> => {
            const apiUrl = `${process.env.API_URL}:${process.env.API_PORT}${process.env.API_VERSION}`;
            const result = await fetch(`${apiUrl}/hello-world`);
            const msg = await result.json();

            setMessage(msg);
        };

        fetchItens();
    }, []);

    return (
        <>
            <h1>
                Hello from {compiler} and {framework}
            </h1>
            {message != null && <p>{JSON.stringify(message)}</p>}
        </>
    );
};
