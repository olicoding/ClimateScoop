const allowedBranches = ["staging", "main"];
const currentBranch = process.env.VERCEL_GIT_COMMIT_REF;

if (allowedBranches.includes(currentBranch)) {
  process.exit(1);
} else {
  process.exit(0);
}
