import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  StackOverflowLogo,
  RedditLogo,
  TwitterLogo,
  InstagramLogo,
  ArrowUpRight,
  DiscordLogo,
  CodepenLogo
} from '@phosphor-icons/react/dist/ssr'

export function Contact() {
  return (
    <div className="flex justify-between text-lg md:text-2xl">
      <div className="flex-1">
        <div className="contact-line contact-line-title">
          <span className="rounded bg-neutral-900 bg-opacity-10 p-1 dark:bg-neutral-100 dark:bg-opacity-10">
            <Envelope size="1em" weight="duotone" />
          </span>
          <span>Email</span>
        </div>
        <div className="contact-line contact-line-title text-[#181717] dark:text-[#E6EDF3]">
          <span className="rounded bg-[#181717] bg-opacity-10 p-1 dark:bg-[#E6EDF3] dark:bg-opacity-10">
            <GithubLogo size="1em" weight="duotone" />
          </span>
          <span>Github</span>
        </div>
        <div className="contact-line contact-line-title text-[#0A66C2]">
          <span className="rounded bg-[#0A66C2] bg-opacity-10 p-1 ">
            <LinkedinLogo size="1em" weight="duotone" />
          </span>
          <span>Linkedin</span>
        </div>
        <div className="contact-line contact-line-title text-[#1D9BF0]">
          <span className="rounded bg-[#1D9BF0] bg-opacity-10 p-1">
            <TwitterLogo size="1em" weight="duotone" />
          </span>
          <span>Twitter</span>
        </div>
        <div className="contact-line contact-line-title text-[#E4405F]">
          <span className="rounded bg-[#E4405F] bg-opacity-10 p-1">
            <InstagramLogo size="1em" weight="duotone" />
          </span>
          <span>Instagram</span>
        </div>
        <div className="contact-line contact-line-title text-[#7289da]">
          <span className="rounded bg-[#7289da] bg-opacity-10 p-1">
            <DiscordLogo size="1em" weight="duotone" />
          </span>
          <span>Discord</span>
        </div>
      </div>
      <div className="hidden flex-1 text-neutral-500 lg:block">
        <div className="contact-line">contact@levybuildz.com</div>
        <div className="contact-line">levybuildz</div>
        <div className="contact-line">levybuildz</div>
        <div className="contact-line">@levybuildz</div>
        <div className="contact-line">@levybuildz</div>
        <div className="contact-line">Levy Buildz</div>
      </div>
      <div>
        <div className="contact-line">
          <a
            className="inline-flex items-end gap-px hover:underline"
            href="https://l.levybuildz.com/email"
            target="_blank"
            rel="external"
          >
            <span className="leading-none">Send e-mail</span>
            <ArrowUpRight size="1em" className="text-sm" />
          </a>
        </div>
        <div className="contact-line">
          <a
            className="inline-flex items-end gap-px hover:underline"
            href="https://l.levybuildz.com/github"
            target="_blank"
            rel="external"
          >
            <span className="leading-none">Open profile</span>
            <ArrowUpRight size="1em" className="text-sm" />
          </a>
        </div>
        <div className="contact-line">
          <a
            className="inline-flex items-end gap-px hover:underline"
            href="https://l.levybuildz.com/linkedin"
            target="_blank"
            rel="external"
          >
            <span className="leading-none">Open profile</span>
            <ArrowUpRight size="1em" className="text-sm" />
          </a>
        </div>
        <div className="contact-line">
          <a
            className="inline-flex items-end gap-px hover:underline"
            href="https://l.levybuildz.com/twitter"
            target="_blank"
            rel="external"
          >
            <span className="leading-none">See tweets</span>
            <ArrowUpRight size="1em" className="text-sm" />
          </a>
        </div>
        <div className="contact-line">
          <a
            className="inline-flex items-end gap-px hover:underline"
            href="https://l.levybuildz.com/instagram"
            target="_blank"
            rel="external"
          >
            <span className="leading-none">Open profile</span>
            <ArrowUpRight size="1em" className="text-sm" />
          </a>
        </div>
        <div className="contact-line">
          <a
            className="inline-flex items-end gap-px hover:underline"
            href="https://l.levybuildz.com/discord"
            target="_blank"
            rel="external"
          >
            <span className="leading-none">Join Community</span>
            <ArrowUpRight size="1em" className="text-sm" />
          </a>
        </div>
      </div>
    </div>
  )
}
