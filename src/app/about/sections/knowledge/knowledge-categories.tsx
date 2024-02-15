import { IconType } from 'react-icons'
import {
  SiAdobephotoshop,
  SiAmazonaws,
  SiCss3,
  SiDeno,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFastify,
  SiFigma,
  SiGithub,
  SiGnubash,
  SiGooglecloud,
  SiGoogleplay,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMicrosoftoffice,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOnlyoffice,
  SiPrisma,
  SiPwa,
  SiPython,
  SiReact,
  SiRust,
  SiStyledcomponents,
  SiTailwindcss,
  SiThunderbird,
  SiTypescript,
  SiWindows,
  SiVuedotjs,
  SiElixir,
  SiCplusplus,
  SiPhp,
  SiJquery,
  SiGraphql,
  SiNunjucks,
  SiElectron,
  SiArduino,
  SiWordpress,
  SiGoogle,
  SiVercel,
  SiCloudflare,
  SiPlanetscale,
  SiHeroku,
  SiHaxe,
  SiWebflow,
  SiSolidity,
  SiSvelte,
  SiMarkdown,
  SiBlender,
  SiFramer,
  SiCanva,
  SiAseprite,
  SiCircle,
  SiNotion,
  SiIfttt,
  SiTodoist,
  SiTrello
} from 'react-icons/si'
import { FaJava, FaPhoenixFramework } from 'react-icons/fa'

export interface Knowledge {
  icon: IconType
  title: string
  color: string
  status: 'good' | 'rusty' | 'learning'
}

export const knowledgeCategories: {
  title: string
  knowledgeList: Knowledge[]
}[] = [
  {
    title: 'Programming languages',
    knowledgeList: [
      {
        title: 'Haxe',
        icon: SiHaxe,
        color: '#f89820',
        status: 'learning'
      },
      {
        title: 'Solidity',
        icon: SiSolidity,
        color: '#2b247c',
        status: 'learning'
      },
      {
        title: 'Javascript',
        status: 'good',
        icon: SiJavascript,
        color: '#F7DF1E'
      },
      {
        title: 'Typescript',
        status: 'good',
        icon: SiTypescript,
        color: '#3178C6'
      },
      {
        title: 'HTML5',
        status: 'good',
        icon: SiHtml5,
        color: '#E34F26'
      },
      {
        title: 'Markdown',
        status: 'good',
        icon: SiMarkdown,
        color: '#fcb32c'
      },
      {
        title: 'CSS3',
        status: 'good',
        icon: SiCss3,
        color: '#1572B6'
      },
      {
        title: 'C++',
        icon: SiCplusplus,
        color: '#00599C',
        status: 'rusty'
      }
    ]
  },
  {
    title: 'Web development',
    knowledgeList: [
      {
        title: 'Next.js',
        status: 'good',
        icon: SiNextdotjs,
        color: '#FFFFFF'
      },
      {
        title: 'Tailwind CSS',
        status: 'good',
        icon: SiTailwindcss,
        color: '#06B6D4'
      },
      {
        title: 'Wordpress',
        icon: SiWordpress,
        color: '#21759B',
        status: 'good'
      },
      {
        title: 'Webflow',
        icon: SiWebflow,
        color: '#0769AD',
        status: 'good'
      }
    ]
  },
  {
    title: 'Infrastructure and DevOps',
    knowledgeList: [
      {
        title: 'PlanetScale',
        status: 'learning',
        icon: SiPlanetscale,
        color: '#000000'
      },
      {
        title: 'Docker',
        status: 'good',
        icon: SiDocker,
        color: '#2496ED'
      },
      {
        title: 'Linux',
        status: 'good',
        icon: SiLinux,
        color: '#FCC624'
      },
      {
        title: 'NGINX',
        status: 'good',
        icon: SiNginx,
        color: '#009639'
      },
      {
        title: 'Google Cloud',
        status: 'good',
        icon: SiGooglecloud,
        color: '#4285F4'
      },
      {
        title: 'AWS',
        status: 'good',
        icon: SiAmazonaws,
        color: '#232F3E'
      },
      {
        title: 'Github',
        status: 'good',
        icon: SiGithub,
        color: '#181717'
      },
      {
        title: 'Vercel',
        status: 'good',
        icon: SiVercel,
        color: '#000000'
      },
      {
        title: 'Cloudflare',
        status: 'good',
        icon: SiCloudflare,
        color: '#F38020'
      }
    ]
  },
  {
    title: 'Design',
    knowledgeList: [
      {
        title: 'Blender',
        status: 'learning',
        icon: SiBlender,
        color: '#EA7600'
      },
      {
        title: 'Framer',
        status: 'learning',
        icon: SiFramer,
        color: '#DB7093'
      },
      {
        title: 'Figma',
        status: 'learning',
        icon: SiFigma,
        color: '#a259ff'
      },
      {
        title: 'Canva',
        status: 'good',
        icon: SiCanva,
        color: '#01C3CC'
      },
      {
        title: 'Aseprite',
        status: 'good',
        icon: SiAseprite,
        color: '#7d929e'
      },
      {
        title: 'Spline',
        status: 'good',
        icon: SiCircle,
        color: '#4480ff'
      },
      {
        title: 'Photoshop',
        status: 'rusty',
        icon: SiAdobephotoshop,
        color: '#31A8FF'
      }
    ]
  },
  {
    title: 'Productivity',
    knowledgeList: [
      {
        title: 'IFTTT',
        status: 'learning',
        icon: SiIfttt,
        color: '#52c7f3'
      },
      {
        title: 'Notion',
        status: 'good',
        icon: SiNotion,
        color: '#976D57'
      },
      {
        title: 'Todoist',
        status: 'good',
        icon: SiTodoist,
        color: '#e34131'
      },
      {
        title: 'Trello',
        status: 'good',
        icon: SiTrello,
        color: '#444444'
      }
    ]
  }
]
