import os

workspace_dir = "/Users/harshitsingh/Documents/padhai-cbse"

replacements = [
    ("Toppers Clan", "Toppers Clan"),
    ("toppers clan", "toppers clan"),
    ("TOPPERS CLAN", "TOPPERS CLAN"),
    
    ("Gaurav Bhaiya", "Gaurav Bhaiya"),
    ("gaurav bhaiya", "gaurav bhaiya"),
    ("GAURAV BHAIYA", "GAURAV BHAIYA"),
    
    ("Gaurav", "Gaurav"),
    ("gaurav", "gaurav"),
    ("GAURAV", "GAURAV"),
    
    ("CBSE", "CBSE"),
    ("cbse", "cbse"),
    ("Cbse", "Cbse"),
]

exclude_dirs = {".git", "node_modules", ".next", "extracted"}
exclude_extensions = {".png", ".jpg", ".jpeg", ".gif", ".pdf", ".ico", ".woff", ".woff2", ".ttf", ".eot", ".mp4", ".zip", ".tar", ".gz"}

changed_files = 0

for root, dirs, files in os.walk(workspace_dir):
    # filter out excluded directories
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    
    for file in files:
        # skip by extension
        _, ext = os.path.splitext(file)
        if ext.lower() in exclude_extensions:
            continue
            
        file_path = os.path.join(root, file)
        
        # read and try to replace
        try:
            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
                
            new_content = content
            for old_str, new_str in replacements:
                new_content = new_content.replace(old_str, new_str)
                
            if new_content != content:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated: {file_path}")
                changed_files += 1
        except Exception as e:
            print(f"Error reading/writing {file_path}: {e}")

# Rename the file if it exists
old_file = os.path.join(workspace_dir, "src", "lib", "cbse-data.ts")
new_file = os.path.join(workspace_dir, "src", "lib", "cbse-data.ts")

if os.path.exists(old_file):
    os.rename(old_file, new_file)
    print(f"Renamed: {old_file} -> {new_file}")

print(f"Total files updated: {changed_files}")
