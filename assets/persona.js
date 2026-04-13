const Persona = {
    safe: (val, fallback = "") => String(val ?? fallback),
    fmt: (num, decimals = 2) => {
        const val = parseFloat(num);
        return isFinite(val) ? val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) : "--";
    },

    // V3: Cinematic D3 Transition Helper
    transition: (selection, duration = 1000) => {
        return selection.transition().duration(duration).ease(d3.easeCubicInOut);
    },

    // V3: High-Density Panel Renderer
    showDetail: (data, template) => {
        const panel = document.getElementById('persona-detail-panel');
        if (panel) {
            panel.innerHTML = template(data);
            panel.classList.add('active');
        }
    },

    renderGSP: (integrityReport) => {
        const rows = integrityReport.map(r => `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 8px 0; font-weight: 700;">${Persona.safe(r.feature)}</td>
                <td style="color: var(--persona-blue-500);">${Persona.safe(r.implementation)}</td>
                <td style="color: #64748b; font-family: monospace; font-size: 0.7rem;">${Persona.safe(r.source)}</td>
            </tr>
        `).join('');

        return `
            <div class="persona-card" style="border-top: 4px solid var(--persona-gold-500); background: rgba(0,0,0,0.2);">
                <h4 style="color: var(--persona-gold-500); margin: 0 0 15px 0; font-size: 0.7rem; text-transform: uppercase;">Integrity Protocol V3</h4>
                <table style="width: 100%; font-size: 0.75rem; border-collapse: collapse;">
                    <thead>
                        <tr style="text-align: left; color: #94a3b8; font-size: 0.6rem; text-transform: uppercase;">
                            <th style="padding-bottom: 10px;">Domain</th>
                            <th style="padding-bottom: 10px;">Logic</th>
                            <th style="padding-bottom: 10px;">Provenance</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `;
    }
};

window.Persona = Persona;
