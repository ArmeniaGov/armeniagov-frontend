import { NotificationBanner } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<NotificationBanner header='Հաջողություն' success>
    Ձեր դիմումն ուղարկելու համար մնացել է 7 օր։
    <a className="armeniagov-notification-banner__link" href="#1">
        Դիտել դիմումը
    </a>.
</NotificationBanner>

<NotificationBanner header='Կարևոր է իմանալ'>
    Ձեր դիմումն ուղարկելու համար մնացել է 7 օր։
    <a className="armeniagov-notification-banner__link" href="#1">
        Դիտել դիմումը
    </a>.
</NotificationBanner>
`;

export function NotificationBannerDoc() {
    return (
        <>
            <CopyBlock
                text={code}
                theme={atomOneDark}
                startingLineNumber={1}
                language="jsx"
                showLineNumbers
                codeBlock
                wrapLines
            />

            <hr/>

            <NotificationBanner header='Հաջողություն' success>
                Ձեր դիմումն ուղարկելու համար մնացել է 7 օր։
                <a className="armeniagov-notification-banner__link" href="#1">
                    Դիտել դիմումը
                </a>.
            </NotificationBanner>

            <NotificationBanner header='Կարևոր է իմանալ'>
                Ձեր դիմումն ուղարկելու համար մնացել է 7 օր։
                <a className="armeniagov-notification-banner__link" href="#1">
                    Դիտել դիմումը
                </a>.
            </NotificationBanner>
        </>
    );
}

export default NotificationBannerDoc;
