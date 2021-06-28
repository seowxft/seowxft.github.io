import React from 'react';
import PropTypes from 'prop-types';
import {
  IconGooglescholar,
  IconBookmark,
  IconExternal,
  IconFolder,
  IconFork,
  IconInstagram,
  IconLoader,
  IconLogo,
  IconOrcid,
  IconOsf,
  IconStar,
  IconTwitter,
  IconTwitter2,
  IconGitHub2,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'Googlescholar':
      return <IconGooglescholar />;
    case 'Orcid':
      return <IconOrcid />;
    case 'Osf':
      return <IconOsf />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub2 />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    case 'Twitter2':
      return <IconTwitter2 />;
    case 'GitHub2':
      return <IconGitHub2 />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
