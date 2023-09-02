import apiUrl from "@/utils/api";
import type { Link } from "@/types";

const ProfileLinks: Link[] = [
  {
    title: "Dashboard",
    href: `https://dashboard.adomate.ai/`,
    sameWindow: true,
  },
  {
    title: "Support",
    href: `/support`,
    sameWindow: true,
  },
  {
    title: "Logout",
    href: `${apiUrl}/v1/user/logout?redirect=${window.location.href}`,
    sameWindow: true,
  },
];

const Links: Link[] = [
  {
    title: "Home",
    to: { name: "Home" },
  },
  {
    title: "About",
    to: { name: "About" },
  },
  {
    title: "Services",
    to: { name: "Services" },
  },
  {
    to: { name: "Pricing" },
    title: "Pricing",
  },
];

const FooterLinks: Link[] = [
  {
    title: "About Us",
    to: "#",
    sublinks: [
      {
        to: { name: "MissionAndVision" },
        title: "Mission and Vision",
      },
      {
        to: { name: "About", params: { section: "our-team" } },
        title: "Our Team",
      },
      {
        href: "https://www.linkedin.com/company/adomate-ai/jobs/",
        title: "Careers",
      },
      {
        to: { name: "Reviews" },
        title: "Reviews",
      },
    ],
  },
  {
    title: "Discover",
    to: "#",
    sublinks: [
      {
        to: { name: "Resources" },
        title: "Our Blog",
      },
      {
        to: { name: "Pricing" },
        title: "Plans and Pricing",
      },
      {
        to: { name: "KnowledgeBase" },
        title: "Knowledge Base",
      },
      {
        to: { name: "NotFound" },
        title: "Cookie Policy",
      },
    ],
  },
  {
    title: "Support",
    to: "#",
    sublinks: [
      {
        to: { name: "Pricing", params: { section: "faqs" } },
        title: "FAQs",
      },
      {
        href: "https://status.adomate.ai",
        title: "Status Page",
      },
      {
        to: { name: "NotFound" },
        title: "Live Chat",
      },
      {
        href: "mailto:support@adomate.ai",
        title: "Contact Us",
      },
    ],
  },
  {
    title: "Useful Links",
    to: "#",
    sublinks: [
      {
        to: { name: "Pricing", params: { section: "custom-solution" } },
        title: "Request a quote",
      },
      {
        to: { name: "NotFound" },
        title: "How it works",
      },
      {
        to: { name: "Resources" },
        title: "Resources",
      },
      {
        to: { name: "About", params: { section: "case-studies" } },
        title: "Case Studies",
      },
    ],
  },
];

// Allow merging sublinks by title
const MergeLinks = (incomingLinks: Link[]): void => {
  incomingLinks.forEach((link) => {
    // Check if title is Profile, if so, add to Profile links
    if (link.title === "Profile") {
      if (link.sublinks) {
        ProfileLinks.push(...link.sublinks);
      }
      return;
    }
    // Otherwise, find link based on title from existing links
    const existingLink = Links.find((l) => l.title === link.title);
    if (existingLink) {
      // Merge arrays
      if (link.sublinks && existingLink.sublinks) {
        existingLink.sublinks = existingLink.sublinks.concat(link.sublinks);
      } else {
        existingLink.sublinks = link.sublinks;
      }
    } else {
      Links.push(link);
    }
  });
};

export default Links;
export { ProfileLinks, MergeLinks, FooterLinks };
