import { useContext, useEffect } from 'react';
import { DeskInfoContext } from '../contexts/deskInfo.context';
import { Layout } from '../Layout/Layout';

export const DesksPage = () => {
    const { desksInfo } = useContext(DeskInfoContext);

    useEffect(() => {
        console.log(desksInfo);
    }, [desksInfo]);

    return (
        <Layout>
            <>
                <h1>This is desks page</h1>
            </>
        </Layout>
    );
};
