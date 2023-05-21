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
        to: { name: "NotFound" },
        title: "Mission and Vision",
      },
      {
        to: { name: "NotFound" },
        title: "Our Team",
      },
      {
        href: "https://www.linkedin.com/company/adomate-ai/jobs/",
        title: "Careers",
      },
      {
        to: { name: "NotFound" },
        title: "Press and Media",
      },
    ],
  },
  {
    title: "Discover",
    to: "#",
    sublinks: [
      {
        to: { name: "NotFound" },
        title: "Our Blog",
      },
      {
        to: { name: "Pricing" },
        title: "Plans and Pricing",
      },
      {
        to: { name: "NotFound" },
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
        to: { name: "NotFound" },
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
        to: { name: "NotFound" },
        title: "Contact Us",
      },
      {
        to: { name: "NotFound" },
        title: "Support Center",
      },
    ],
  },
  {
    title: "Useful Links",
    to: "#",
    sublinks: [
      {
        to: { name: "NotFound" },
        title: "Request a quote",
      },
      {
        to: { name: "NotFound" },
        title: "How it works",
      },
      {
        to: { name: "Pricing" },
        title: "Pricing",
      },
      {
        to: { name: "Reviews" },
        title: "Reviews and Testimonials",
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
