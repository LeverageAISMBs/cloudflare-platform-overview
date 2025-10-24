
import React, { useEffect, useRef } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const AIPerformanceChart: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const chartRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                if (chartRef.current) {
                    chartRef.current.destroy();
                }

                chartRef.current = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Inference Latency', 'Scalability', 'Cost-to-Serve'],
                        datasets: [
                            {
                                label: 'Traditional Cloud AI',
                                data: [150, 65, 80],
                                backgroundColor: 'rgba(217, 119, 6, 0.6)',
                                borderColor: 'rgba(217, 119, 6, 1)',
                                borderWidth: 1
                            },
                            {
                                label: 'Cloudflare Workers AI',
                                data: [30, 95, 60],
                                backgroundColor: 'rgba(242, 100, 25, 0.6)',
                                borderColor: 'rgba(242, 100, 25, 1)',
                                borderWidth: 1
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        indexAxis: 'y',
                        scales: {
                            x: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Relative Score (Higher is Better, except for Latency)'
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        let label = context.dataset.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.label === 'Inference Latency') {
                                            label += `${context.raw}ms`;
                                        } else {
                                            label += `${context.raw}/100`;
                                        }
                                        return label;
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return <canvas ref={canvasRef}></canvas>;
};
