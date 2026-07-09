with open('src/components/layout/dashboard-sidebar.tsx', 'r') as f:
    content = f.read()

replacement = """        <div style={{
          padding: "18px 20px 14px",
          borderBottom: "1px solid var(--border)",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}>
          <img src="/logo.png" alt="PADH.AI" style={{ height: 70, width: 'auto' }} />
        </div>"""

content = content.replace("""        <div style={{
          padding: "18px 20px 14px",
          borderBottom: "1px solid var(--border)",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}>
          <img src="/logo.png" alt="PADH.AI" style={{ height: 40, width: 'auto' }} />
        </div>""", replacement)

# If it was still in the original format for some reason
content = content.replace("""        <div style={{
          padding: "18px 20px 14px",
          borderBottom: "1px solid var(--border)",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}>
          <PadhLogo size={28} />
          <div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: 15,
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}>
              PADH.AI
            </div>
            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: 9,
              fontWeight: 500,
              color: "var(--text-muted)",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              marginTop: 1,
            }}>
              Beta
            </div>
          </div>
        </div>""", replacement)

with open('src/components/layout/dashboard-sidebar.tsx', 'w') as f:
    f.write(content)
