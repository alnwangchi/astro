import React from 'react';
import {
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  FacebookIcon,
  LineIcon,
  LinkedinIcon
} from 'react-share';

interface ShareButtonsProps {
  pathname: string;
  title: string;
  summary?: string;
}

const DOMAIN_URL = 'https://shozzle.dev';

const ShareButtons = (props: ShareButtonsProps) => {
  const { pathname, title, summary } = props;

  const url = `${DOMAIN_URL}${pathname}`;

  return (
    <div className="flex space-x-2">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={30} round bgStyle={{ fill: '#999' }} />
      </FacebookShareButton>
      <LineShareButton url={url} title={title}>
        <LineIcon size={30} round bgStyle={{ fill: '#999' }} />
      </LineShareButton>
      <LinkedinShareButton url={url} title={title} summary={summary}>
        <LinkedinIcon size={30} round bgStyle={{ fill: '#999' }} />
      </LinkedinShareButton>
    </div>
  );
};

export default ShareButtons;
